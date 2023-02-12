import dangdoApi from "..";
import { REQUEST_URL } from "../requestUrl";
import { IStoreItem } from "../types/storeList";

export const getStoreList = async () => {
  const response = await dangdoApi.get<IStoreItem[]>(REQUEST_URL.STORE_LIST);
  return response.data;
};

export const getStore = async (storeId: number) => {
  const response = await dangdoApi.get<IStoreItem>(REQUEST_URL.STORE_ITEM(storeId));
  return response.data;
};

// NOTE: 응답값 변경가능
export const postStore = async (body: IStoreItem) => {
  const response = await dangdoApi.post<IStoreItem>(REQUEST_URL.STORE_LIST, body);
  return response.data;
};

// NOTE: 응답값 변경가능
export const putStore = async ({ storeId, body }: { storeId: number; body: IStoreItem }) => {
  const response = await dangdoApi.put<IStoreItem>(REQUEST_URL.STORE_ITEM(storeId), body);
  return response.data;
};

// NOTE: 응답값 변경가능
export const deleteStore = async (storeId: number) => {
  const response = await dangdoApi.delete<IStoreItem>(REQUEST_URL.STORE_ITEM(storeId));
  return response.data;
};
