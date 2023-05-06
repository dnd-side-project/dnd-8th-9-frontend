/* eslint-disable no-param-reassign */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  requiresAuth?: boolean;
}

const dangdoApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  timeout: 2500,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json,",
  },
});

dangdoApi.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    if (config.requiresAuth) {
      const token = localStorage.getItem("access_token");
      if (!token) {
        return Promise.reject(new Error("request failed because of no valid token"));
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

dangdoApi.interceptors.response.use(
  (response: AxiosResponse) => {
    if (typeof response.data === "undefined") {
      throw new Error("Response is undefined");
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default dangdoApi;
