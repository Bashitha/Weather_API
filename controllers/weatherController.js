const { Weather } = require("../models/weather");
exports.weather_list_by_date = async (req, res) => {
  const { from, to } = req.body;
  const weatherData = await Weather.find({
    dateTime: {
      $gte: new Date(from),
      $lt: new Date(to),
    },
  });

  res.send(weatherData);
};
exports.weather_create_fetching_api = async (
  humidity,
  temperature,
  min_temperature,
  max_temperature
) => {
  const weather = new Weather({
    humidity,
    temperature,
    min_temperature,
    max_temperature,
  });
  await weather.save();
};
