const express = require("express");
const { weather_list_by_date } = require("../controllers/weatherController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, weather_list_by_date);

module.exports = router;
