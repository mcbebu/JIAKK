var express = require("express");
var router = express.Router();
var { getAllDrivers, getStationOrders, getAttendance, getOrders } = require("../utils/database");

router.get("/getAllDrivers", async function (req, res, next) {
  const drivers = await getAllDrivers();
  res.send(drivers);
});

router.get("/getAverageDeliveries", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as param" });
  } else {
    const totalDeliveries = await getStationOrders(req.query.stationid);
    let startDate = Date.parse(totalDeliveries[0]['date_of_delivery']);
    let endDate = Date.parse(totalDeliveries[-1]['date_of_delivery']);
    let totalDays = Math.ceil(endDate.getTime() - startDate.getTime() / (1000 * 3600 * 24));
    
    res.send({
      averageDeliveries: totalDeliveries.length / totalDays,
      stationid: req.query.stationid,
    })
  }
});

router.get("/getExpectedOutput", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as param" });
  } else {
    const totalDeliveries = await getStationOrders(req.query.stationid);
    let startDate = Date.parse(totalDeliveries[0]['date_of_delivery']);
    let endDate = Date.parse(totalDeliveries[-1]['date_of_delivery']);
    let totalDays = Math.ceil(endDate.getTime() - startDate.getTime() / (1000 * 3600 * 24));
    let averageDeliveries = totalDeliveries.length / totalDays;
    
    let tomorrow =  new Date();
    tomorrow.setDate(new Date() + 1);
    const expectedAttendance = await getAttendance(req.query.stationid, tomorrow.toISOString);
    
    res.send({
      expectedOutput: averageDeliveries * expectedAttendance.length,
      stationid: req.query.stationid,
    })
  }
});

router.get("/getTomorrowDemand", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as param" });
  } else {    
    let tomorrow =  new Date();
    tomorrow.setDate(new Date() + 1);
    const actualDemand = await getOrders(req.query.stationid, tomorrow.toISOString);
    
    res.send({
      actualDemand: actualDemand.length,
      stationid: req.query.stationid,
    })
  }
});

router.get("/getExpectedDifference", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as param" });
  } else {    
    const totalDeliveries = await getStationOrders(req.query.stationid);
    let startDate = Date.parse(totalDeliveries[0]['date_of_delivery']);
    let endDate = Date.parse(totalDeliveries[-1]['date_of_delivery']);
    let totalDays = Math.ceil(endDate.getTime() - startDate.getTime() / (1000 * 3600 * 24));
    let averageDeliveries = totalDeliveries.length / totalDays;
    
    let tomorrow =  new Date();
    tomorrow.setDate(new Date() + 1);
    const expectedAttendance = await getAttendance(req.query.stationid, tomorrow.toISOString);
    let expectedOutput = averageDeliveries * expectedAttendance.length;

    const actualDemand = await getOrders(req.query.stationid, tomorrow.toISOString);

    res.send({
      expectedDifference: expectedOutput - actualDemand,
      stationid: req.query.stationid,
    })
  }
})


module.exports = router;
