var express = require("express");
var router = express.Router();
var {
  getAllDrivers,
  getStationOrders,
  getAttendance,
  getOrders,
} = require("../utils/database");

router.get("/getAllDrivers", async function (req, res, next) {
  const drivers = await getAllDrivers();
  res.send(drivers);
});

router.get("/getAverageDeliveries", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as param" });
  } else {
    const totalDeliveries = await getStationOrders(
      req.query.stationid,
      new Date().toISOString()
    );
    if (totalDeliveries.length === 0) {
      res.send({
        averageDeliveries: 0,
        stationid: req.query.stationid,
      });
    } else {
      let startDate = Date.parse(totalDeliveries[0]["date_of_delivery"]);
      let endDate = Date.parse(
        totalDeliveries[totalDeliveries.length - 1]["date_of_delivery"]
      );
      let totalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));

      res.send({
        averageDeliveries: totalDeliveries.length / totalDays,
        stationid: req.query.stationid,
      });
    }
  }
});

router.get("/getExpectedOutput", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as param" });
  } else {
    const totalDeliveries = await getStationOrders(
      req.query.stationid,
      new Date().toISOString()
    );

    if (totalDeliveries.length === 0) {
      res.send({
        expectedOutput: 0,
        stationid: req.query.stationid,
      });
    } else {
      let startDate = Date.parse(totalDeliveries[0]["date_of_delivery"]);
      let endDate = Date.parse(
        totalDeliveries[totalDeliveries.length - 1]["date_of_delivery"]
      );
      let totalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
      let averageDeliveries = totalDeliveries.length / totalDays;

      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      console.log(tomorrow);
      const expectedAttendance = await getAttendance(
        req.query.stationid,
        tomorrow.toISOString()
      );

      console.log(expectedAttendance);

      res.send({
        expectedOutput: averageDeliveries * expectedAttendance.length,
        stationid: req.query.stationid,
      });
    }
  }
});

router.get("/getTomorrowDemand", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as param" });
  } else {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const actualDemand = await getOrders(
      req.query.stationid,
      tomorrow.toISOString()
    );

    console.log(actualDemand);

    res.send({
      actualDemand: actualDemand.length,
      stationid: req.query.stationid,
    });
  }
});

router.get("/getExpectedDifference", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as param" });
  } else {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const totalDeliveries = await getStationOrders(
      req.query.stationid,
      tomorrow.toISOString()
    );

    if (totalDeliveries.length === 0) {
      res.send({
        expectedDifference: 0,
        stationid: req.query.stationid,
      });
    } else {
      let startDate = Date.parse(totalDeliveries[0]["date_of_delivery"]);
      let endDate = Date.parse(
        totalDeliveries[totalDeliveries.length - 1]["date_of_delivery"]
      );
      let totalDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
      let averageDeliveries = totalDeliveries.length / totalDays;

      const expectedAttendance = await getAttendance(
        req.query.stationid,
        tomorrow.toISOString()
      );
      let expectedOutput = averageDeliveries * expectedAttendance.length;

      const actualDemand = await getOrders(
        req.query.stationid,
        tomorrow.toISOString()
      );

      res.send({
        expectedDifference: expectedOutput - actualDemand.length,
        stationid: req.query.stationid,
      });
    }
  }
});

module.exports = router;
