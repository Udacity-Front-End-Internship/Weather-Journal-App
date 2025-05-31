![image](https://github.com/user-attachments/assets/1941d047-0748-4b71-a4e2-b8f55dd06671)


# Weather Journal App

This project is designed as an asynchronous web application that interacts with a Web API and incorporates user data to update the user interface dynamically. The Weather Journal App allows users to input their ZIP code and personal reflections, retrieves weather data from an external source, and displays both the weather information and the user’s entry on the interface in real-time.

## Key Features

- Asynchronous data fetching using JavaScript and the Fetch API.
- Interaction with a third-party weather API (such as OpenWeatherMap).
- Express server setup with well-defined GET and POST routes.
- Dynamic UI updates based on both API data and user input.
- Project structure and starter code provided for rapid development and learning.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Udacity-Front-End-Internship/Weather-Journal-App.git
   cd Weather-Journal-App
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Obtain an API key:**  
   Register at [OpenWeatherMap](https://openweathermap.org/api) (or the chosen API provider) and insert the API key in the configuration file as specified in the code comments.

4. **Start the application:**
   ```bash
   npm start
   ```
   The server runs locally at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
Weather-Journal-App/
├── commentsOnlyJS/    # Comments-only version of JS code
├── website/
│   ├── css/
│   ├── js/
│   ├── index.html
│   └── ...
├── server.js
├── package.json
└── README.md
```

## Project Rubric

Project evaluation is based on the official Udacity Weather-Journal project rubric, which outlines the expected functionality, code quality, and best practices.

## Dependencies

- Node.js
- Express
- body-parser
- cors
- OpenWeatherMap API (or equivalent)

## References

- [Express Documentation](https://expressjs.com/)
- [MDN Web Docs on Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## License

This project is provided for educational purposes in connection with the Udacity Front End Web Developer Nanodegree program.

---

Happy coding!
