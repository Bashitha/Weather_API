const express = require("express");
const weatherData = require("../routes/weatherData");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/weatherData", weatherData);
  app.use(error);
};
