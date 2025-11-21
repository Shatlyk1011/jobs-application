import axios from "axios";
import { API_URL } from "@/services/shared/constant";

console.log("API_URL", API_URL);
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  method: "GET",
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
