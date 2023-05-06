import { AxiosResponse } from "axios";

export interface IErrorResponse {
  status: number;
  message: string;
}

export interface IBaseResponse<T> extends AxiosResponse<T> {
  status: number;
  data: T;
  message: string;
}
