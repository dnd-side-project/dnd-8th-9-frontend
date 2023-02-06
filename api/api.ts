import axios from "axios";
import { IUser } from "./type";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

const fetchUser = async () => {
  const response = await api.get<IUser[]>("/users");
  return response.data;
};

export default fetchUser;
