import axios from "axios";

const BASE_URL = "https://visionarydynamicsas-axbyczf9cnb8e4a8.eastus-01.azurewebsites.net/api";

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Token interceptor (keep same)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});