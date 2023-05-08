import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  IBaseResponse,
  IErrorResponse,
  IMenuDetails,
  IMenuListItem,
  IReviewListItem,
  IStoreDetails,
  IStoreListItem,
} from "@/types/api";
import storeApi from "@/api/domains/store";
import { storeQueryKey } from "@/constants/queryKey";
import { IMenuListItemSimple } from "@/mocks/mockData/menuList";
import { IStoreDetailsSpecific } from "@/mocks/mockData/store";

export const useGetStoreList = () => {
  return useQuery<IBaseResponse<IStoreListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: storeQueryKey.list,
    queryFn: () => storeApi.getStoreList(),
  });
};

export const useGetStore = (storeId: number) => {
  return useQuery<IBaseResponse<IStoreDetails | IStoreDetailsSpecific>, AxiosError<IErrorResponse>>(
    {
      queryKey: storeQueryKey.detail(storeId),
      queryFn: () => storeApi.getStoreDetails(storeId),
    },
  );
};

export const useGetStoreMenus = (storeId: number) => {
  return useQuery<
    IBaseResponse<IMenuDetails[] | IMenuListItemSimple[] | IMenuListItem[]>,
    AxiosError<IErrorResponse>
  >({
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
