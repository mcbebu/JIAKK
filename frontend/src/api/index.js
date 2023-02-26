import axios from "axios";

const BASE_URL = "http://localhost:3001";

const get = (endpoint, params = undefined) => {
  return axios.get(BASE_URL + endpoint, {
    params: params,
  });
};

const post = (endpoint, data) => {
  return axios.post(BASE_URL + endpoint, data);
};

const getAverageDeliveries = (stationid) => {
  return get("/orders/getAverageDeliveries", { stationid: stationid });
};

const getExpectedOutput = (stationid) => {
  return get("/orders/getExpectedOutput", { stationid: stationid });
};

const getTomorrowDemand = (stationid) => {
  return get("/orders/getTomorrowDemand", { stationid: stationid });
};

const getExpectedDifference = (stationid) => {
  return get("/orders/getExpectedDifference", { stationid: stationid });
};

const getDistance = (stationid_from, stationid_to) => {
  return get("/orders/getDistance", {
    stationid_from: stationid_from,
    stationid_to: stationid_to,
  });
};

const getStationName = (stationid) => {
  return get("/orders/getStationName", { stationid: stationid });
};

const getOtherStationsInfo = (stationid) => {
  return get("/orders/getOtherStationsInfo", { stationid: stationid });
};

const login = (email, password) => {
  return post("/users/login", { email: email, password: password });
};

const addUser = (email, password) => {
  return post("/users/create", { email: email, password: password });
};

export {
  getAverageDeliveries,
  getExpectedOutput,
  getTomorrowDemand,
  getExpectedDifference,
  getDistance,
  getStationName,
  getOtherStationsInfo,
  login,
  addUser,
};
