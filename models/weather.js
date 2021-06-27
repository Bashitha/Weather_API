const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  humidity: Number,
  temperature: Number,
  min_temperature: Number,
  max_temperature: Number,
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

const Weather = mongoose.model("Weather", weatherSchema);

exports.Weather = Weather;
