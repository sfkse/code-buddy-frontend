import axios from "axios";
import config from "../config/config.dev.json";

const axiosInstance = axios.create({
  baseURL: `${config.API_BASE_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${""}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;

