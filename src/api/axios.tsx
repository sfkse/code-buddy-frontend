import axios from "axios";
import config from "../config/config.json";

const axiosInstance = axios.create({
  baseURL: `${config.API_BASE_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("error", error);
    Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (data) => {
//     return data;
//   },
//   (error) => {
//     console.log("error", error);
//     if (error.response.status === 401 || error.response.status === 500) {
//       localStorage.removeItem("user");
//       window.location.href = `${config.APP_BASE_URL}/login?error=Something went wrong. Please try again later.`;
//     }
//     Promise.reject(error);
//   }
// );

export default axiosInstance;

