/* eslint-disable no-param-reassign */
import axios from "axios";

export const dangdoAuthApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  timeout: 2500,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json,",
  },
});

dangdoAuthApi.interceptors.request.use(
  config => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return Promise.reject(new Error("request failed because of no valid token"));
    }
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
