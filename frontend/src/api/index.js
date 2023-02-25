import axios from "axios";

const BASE_URL = 'http://localhost:3001';

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
    return get("/orders/getExpectedOutput", { stationid: stationid })
}

const getTomorrowDemand = (stationid) => {
    return get("/orders/getTomorrowDemand", { stationid: stationid })
}

const getExpectedDifference = (stationid) => {
    return get("/orders/getExpectedDifference", { stationid: stationid })
}

export {
    getAverageDeliveries,
    getExpectedOutput,
    getTomorrowDemand,
    getExpectedDifference,
};