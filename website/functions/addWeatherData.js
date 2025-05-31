const addWeatherData = async (weatherData) => {
  console.log(weatherData);

  const SERVER_PORT_NUMBER = 4000;
  const SERVER_BASE_URL = `http://127.0.0.1:${SERVER_PORT_NUMBER}`;

  const res = await fetch(`${SERVER_BASE_URL}/all`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(weatherData),
  });
  console.log(res);
  try {
    await res.json();
  } catch (error) {
    console.log(error);

    document.getElementById("error").innerHTML = `error : ${error.message}`;
    document.getElementById("error").style.display = "block";
  }
};

export default addWeatherData;
