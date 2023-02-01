import axios from "axios";
import { parseCookies } from "nookies";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async function (config) {
  try {
    const cookies = parseCookies(config?.params?.nextCtx || undefined);

    const token = cookies?.jwtToken;

    config.headers.Authorization = token ?? null;
  } catch (error) {
    console.error("axios-interceptor-error");
  }

  return config;
});

export default api;
