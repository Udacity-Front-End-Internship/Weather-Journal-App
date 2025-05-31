const fetchWeatherData = async (baseURL, zipCode, key) => {
  console.log("fetchWeatherData");

  const res = await fetch(baseURL + zipCode + key);
  try {
    const data = await res.json();
    if (data.cod != 200) {
      console.log("the status is not 200");

      console.log(data);

      document.getElementById("error").innerHTML = `error : ${data.message}`;

      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log("error", error);
    document.getElementById("error").innerHTML = `error : ${error.message}`;
    document.getElementById("error").style.display = "block";
  }
};

export default fetchWeatherData;
