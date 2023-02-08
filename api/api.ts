import axios from "axios";
import { ITodo, IUser } from "./type";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

export const fetchUser = async () => {
  const response = await api.get<IUser[]>("/users");
  return response.data;
};

export const fetchTodos = async () => {
  const response = await api.get<ITodo[]>("/todo");
  return response.data;
};
