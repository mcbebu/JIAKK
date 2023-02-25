var express = require("express");
var router = express.Router();
var { getAllDrivers } = require("../utils/database");

router.get("/getAllDrivers", async function (req, res, next) {
  const drivers = await getAllDrivers();
  res.send(drivers);
});

module.exports = router;
