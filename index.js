const express = require("express");
const winston = require("winston");
const getWeatherData = require("./utils/getWeatherData");

const app = express();
require("./startup/logging")();
require("./startup/db")();

setInterval(getWeatherData, 10000);

require("./startup/routes")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listen on ${port}...`));
