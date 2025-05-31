const updatingUI = async () => {
  const SERVER_PORT_NUMBER = 4000;
  const SERVER_URL = `http://127.0.0.1:${SERVER_PORT_NUMBER}`;

  const res = await fetch(`${SERVER_URL}/all`);
  try {
    const weatherUIData = await res.json();

    document.getElementById(
      "date"
    ).innerHTML = `Date: ${weatherUIData.newDate}`;

    document.getElementById(
      "city"
    ).innerHTML = `City zip code: ${weatherUIData.zipCode}`;

    document.getElementById("temp").innerHTML = `temp: ${
      weatherUIData.temp + "&degF"
    }`;

    document.getElementById(
      "description"
    ).innerHTML = `description: ${weatherUIData.weather}`;

    document.getElementById(
      "content"
    ).innerHTML = `content: ${weatherUIData.userFeels}`;
  } catch (error) {
    console.log(error);

    document.getElementById("error").innerHTML = `error : ${error.message}`;
    document.getElementById("error").style.display = "block";
  }
};

export default updatingUI;
