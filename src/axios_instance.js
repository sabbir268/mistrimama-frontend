import {
  localStorageService
} from "./helper.js";

const axios = require("axios");
const defaultOptions = {
  //baseURL: process.env.VUE_APP_API_URL
  baseURL: 'http://dev.mm/api/',
  headers: {
    "Content-Type": "application/json"
  }
};
let axiosInstance = axios.create(defaultOptions);
axiosInstance.interceptors.request.use(function (config) {
  let token = localStorageService.getItem("d_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  // config.headers.Authorization =  token ? `${token}` : '';
  return config;
});

export default axiosInstance;