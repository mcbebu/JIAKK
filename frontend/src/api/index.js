import axios from "axios";

const BASE_URL = 'http://localhost:3000';

const get = (endpoint, params = undefined) => {
    return axios.get(BASE_URL + endpoint, {
        params: params,
    });
};

const post = (endpoint, data) => {
    return axios.post(BASE_URL + endpoint, data);
};

const getAllDrivers = (postal) => {
    return get("/driver/getAllDrivers");
};

export {
    getAllDrivers,
};