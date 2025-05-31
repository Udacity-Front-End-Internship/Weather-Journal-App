import clearUI from "./clearUI.js";

import fetchWeatherData from "./fetchWeatherData.js";

import updatingUI from "./updatingUI.js";

import addWeatherData from "./addWeatherData.js";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const APP_ID = "51de218636c2b9ecd1cc1397a2e14f99";

const WEATHER_QUERY_PARAMS = `&appid=${APP_ID}&units=imperial`;

let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const generateWeatherDataHandler = async (e) => {
  e.preventDefault();

  clearUI();

  console.log("button clicked");

  document.getElementById("error").style.display = "none";

  let zipCode = document.getElementById("zip").value;
  let userFeels = document.getElementById("feelings").value;

  console.log("zipCode", zipCode);
  console.log("userFeels", userFeels);

  if (!zipCode || !userFeels) {
    document.getElementById(
      "error"
    ).innerHTML = `error : zip code and user feels are required`;

    document.getElementById("error").style.display = "block";

    return;
  }

  console.log(`zip code is : ${zipCode}, userfeels : ${userFeels}`);

  const WEATHER_BASE_URL = `${BASE_URL}/weather?zip=`;

  try {
    const data = await fetchWeatherData(
      WEATHER_BASE_URL,
      zipCode,
      WEATHER_QUERY_PARAMS
    );

    console.log("data");
    console.dir(data, { depth: null });

    if (data) {
      const temp = Math.round(data.main.temp);
      const weather = data.weather[0].description;

      console.log(newDate, zipCode, userFeels, temp, weather);

      try {
        const data = await addWeatherData({
          newDate,
          zipCode,
          userFeels,
          temp,
          weather,
        });

        console.log("data added successfully");
        console.log(data);

        updatingUI();
      } catch (error) {
        console.log(error);

        document.getElementById("error").innerHTML = `error : ${error.message}`;
        document.getElementById("error").style.display = "block";
      }
    }
  } catch (error) {
    console.log(error);

    document.getElementById("error").innerHTML = `error : ${error.message}`;
    document.getElementById("error").style.display = "block";
  }
};

export default generateWeatherDataHandler;
