import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; // TODO
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
