import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("jwtToken");

  config.headers.Authorization = token ?? null;

  return config;
});

export default api;
