import axios from "axios";
import { BASE_URL } from "./requestUrl";

const dangdoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json,",
  },
});

export default dangdoApi;
