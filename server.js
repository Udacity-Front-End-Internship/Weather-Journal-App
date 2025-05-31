const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const PORT_NUMBER = 4000;

let projectData = {};

const statusCodeConstants = require("./server_constants/statusCodeConstants");
const validateProjectData = require("./validations/validateProjectData");

//console.log(statusCodeConstants);

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// GET route to return the projectData object
app.get("/all", (req, res) => {
  res.send(projectData);
});

// POST route to add incoming data to projectData
app.post("/all", (req, res) => {
  console.log("\n----------------- POST /all -----------------\n");
  console.dir(req.body);

  const { newDate, zipCode, userFeels, temp, weather } = req.body;
  console.log(req.body);

  const isValidProjectData = validateProjectData(req.body);

  console.log("isValidProjectData: ", isValidProjectData);

  console.dir(isValidProjectData, { depth: null });

  if (isValidProjectData) {
    projectData = { newDate, zipCode, userFeels, temp, weather };

    console.log("projectData to be send: ");
    console.dir(projectData, { depth: null });

    res.send(projectData);
  } else {
    const BAD_REQUEST_MESSAGE =
      "Invalid data. Please provide newDate, zipCode, userFeels, temp, and weather.";

    res.status(statusCodeConstants.BAD_REQUEST).send({
      success: false,
      message: BAD_REQUEST_MESSAGE,
    });
  }
});

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.listen(PORT_NUMBER, () => {
  console.log(` app listening on port ${PORT_NUMBER}`);
});
