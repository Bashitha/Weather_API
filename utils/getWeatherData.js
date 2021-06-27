const fetch = require("node-fetch");
const config = require("config");
const {
  weather_create_fetching_api,
} = require("../controllers/weatherController");

module.exports = async function getWeatherData() {
  const weather_api_url = config.get("weather_api_url");
  const data = await fetch(weather_api_url);
  const { humidity, temperature, min_temperature, max_temperature } =
    await data.json();
  await weather_create_fetching_api(
    humidity,
    temperature,
    min_temperature,
    max_temperature
  );
};
