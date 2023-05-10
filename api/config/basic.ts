import axios, { AxiosResponse } from "axios";

export const dangdoApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  timeout: 2500,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json,",
  },
});

dangdoApi.interceptors.request.use(
  config => {
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
