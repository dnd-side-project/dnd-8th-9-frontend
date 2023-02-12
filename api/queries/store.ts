import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { deleteStore, getStore, getStoreList, postStore, putStore } from "../fetchers/store";
import { IErrorResponse } from "../types/error";
import { IStoreItem } from "../types/storeList";

export const useGetStoreList = () => {
  return useQuery<IStoreItem[], AxiosError<IErrorResponse>>(["stores"], getStoreList);
};

export const useGetStore = ({ storeId }: { storeId: number }) => {
  return useQuery<IStoreItem, AxiosError<IErrorResponse>>(["store", storeId], () =>
    getStore(storeId),
  );
};

// NOTE: 응답값 변경가능
export const usePostStore = () => {
  return useMutation<IStoreItem, AxiosError<IErrorResponse>, IStoreItem>(postStore);
};

// NOTE: 응답값 변경가능
export const usePutStore = () => {
  return useMutation<IStoreItem, AxiosError<IErrorResponse>, { body: IStoreItem; storeId: number }>(
    putStore,
  );
};

// NOTE: 응답값 변경가능
export const useDeleteStore = () => {
  return useMutation<IStoreItem, AxiosError<IErrorResponse>, number>(deleteStore);
};
