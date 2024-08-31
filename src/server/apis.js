const axios = require("axios");

const getImageFromPixabay = (key, image) => {
  const url = `https://pixabay.com/api/?key=${key}&q=${image}`;

  return axios
    .get(url)
    .then((response) => {
      if (response.data.totalHits !== 0) {
        return response.data.hits[0].largeImageURL;
      } else {
        return "https://i.ibb.co/cN2kkXV/istockphoto-1404059706-612x612.jpg";
      }
    })
    .catch((error) => {
      console.error("Error fetching data from Pixabay:", error);
      return "https://i.ibb.co/cN2kkXV/istockphoto-1404059706-612x612.jpg";
    });
};

const getDataFromGeoNames = async (username, city) => {
  const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`;
  try {
    return await axios.get(url).then((res) => {
      return {
        lat: res.data.geonames[0].lat,
        lng: res.data.geonames[0].lng,
      };
    });
  } catch (e) {
    console.log(e);
  }
};

const getWeatherData = (apiKey, lat, lon) => {
  const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}`;
  return axios
    .get(url)
    .then((response) => {
      const data = response.data;
      if (data && data.data && data.data.length > 0) {
        const weather = data.data[0];
        return {
          temperature: weather.temp,
          weather: weather.weather.description,
        };
      } else {
        console.error("No weather data found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data from Weatherbit:", error);
    });
};

module.exports = { getImageFromPixabay, getWeatherData, getDataFromGeoNames };
