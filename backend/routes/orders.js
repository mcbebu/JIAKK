var express = require("express");
var router = express.Router();
var {
  getAllDrivers,
  getStationOrders,
  getAttendance,
  getOrders,
  getStationInfo,
  getAllStations,
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

router.get("/getDistance", async function (req, res, next) {
  if (!req.query?.stationid_from || !req.query?.stationid_to) {
    res.send({ error: "Please include 2 stationids as params" });
  } else {
    const { latitude: lat1, longtitude: lon1 } = (await getStationInfo(req.query.stationid_from))[0];
    const { latitude: lat2, longtitude: lon2 } = (await getStationInfo(req.query.stationid_to))[0];

    if (!(lat1 && lon1 && lat2 && lon2)) {
      res.send({
        distance: 0,
        stationid_from: req.query.stationid_from,
        stationid_to: req.query.stationid_to,
      });
    } else {
      res.send({
        distance: getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2),
        stationid_from: req.query.stationid_from,
        stationid_to: req.query.stationid_to,
      })
    }
  }
});

router.get("/getOtherStationsInfo", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as params" });
  } else {
    const stations = await getAllStations();
    let info = [];
    for (let i = 0; i < stations.length; i++) {
      if (stations[i]['station_id'] === req.query.stationid) {
        continue;
      }

      let { latitude: lat1, longtitude: lon1 } = (await getStationInfo(req.query.stationid))[0];
      let { latitude: lat2, longtitude: lon2 } = (await getStationInfo(stations[i]['station_id']))[0];

      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const totalDeliveries = await getStationOrders(
        stations[i]['station_id'],
        tomorrow.toISOString()
      );

      let expectedDifference;

      if (totalDeliveries.length === 0) {
        expectedDifference = 0;
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

        expectedDifference = expectedOutput - actualDemand.length
      }

      let { station_name: stationName } = (await getStationInfo(stations[i]['station_id']))[0];

      info.push({
        distance: getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2),
        stationid_from: req.query.stationid,
        stationid_to: stations[i]['station_id'],
        expectedDifference: expectedDifference,
        stationName: stationName,
      })
    }

    res.send(info);
  }
})

router.get("/getStationName", async function (req, res, next) {
  if (!req.query?.stationid) {
    res.send({ error: "Please include stationid as params" });
  } else {
    const { station_name: stationName } = (await getStationInfo(req.query.stationid))[0];

    if (!stationName) {
      res.send({ error: "Invalid stationid provided" });
    } else {
      res.send({
        stationName: stationName,
        stationid: req.query.stationid,
      })
    }
  }
})

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

module.exports = router;
