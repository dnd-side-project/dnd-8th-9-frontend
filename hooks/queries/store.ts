import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  IBaseResponse,
  IErrorResponse,
  IMenuListItem,
  IReviewListItem,
  IStoreDetails,
  IStoreListItem,
} from "@/types/api";
import storeApi from "@/api/domains/store";
import { storeQueryKey } from "@/constants/queryKey";

export const useGetStoreList = () => {
  return useQuery<IBaseResponse<IStoreListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: storeQueryKey.list,
    queryFn: () => storeApi.getStoreList(),
  });
};

export const useGetStore = (storeId: number) => {
  return useQuery<IBaseResponse<IStoreDetails>, AxiosError<IErrorResponse>>({
    queryKey: storeQueryKey.detail(storeId),
    queryFn: () => storeApi.getStoreDetails(storeId),
  });
};

export const useGetStoreMenus = (storeId: number) => {
  return useQuery<IBaseResponse<IMenuListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: storeQueryKey.menus(storeId),
    queryFn: () => storeApi.getStoreMenus(storeId),
  });
};

export const useGetStoreReviews = (storeId: number) => {
  return useQuery<IBaseResponse<IReviewListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: storeQueryKey.reviews(storeId),
    queryFn: () => storeApi.getStoreReviews(storeId),
  });
};