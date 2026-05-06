import axios from "axios";

const BASE_URL = "https://visionarydynamicsas.com/api";

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Token interceptor
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});