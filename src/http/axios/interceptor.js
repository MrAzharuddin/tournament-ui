import axios from "axios";

const baseURL = "http://localhost:9000";

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.logintoken = "demotoken";
    return config;
  },
  (error) => {
    throw new Error(error);
  }
);
