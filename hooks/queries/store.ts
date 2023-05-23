import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  IBaseResponse,
  IErrorResponse,
  IReviewListItem,
  ISearchOption,
  IStoreDetails,
  IStoreListItem,
  IStoreMenuListItem,
} from "@/types/api";
import storeApi from "@/api/domains/store";
import { storeQueryKey, userQueryKey } from "@/constants/queryKey";

export const useGetStoreList = (options?: Partial<ISearchOption>) => {
  return useQuery<IBaseResponse<IStoreListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: storeQueryKey.list,
    queryFn: () => storeApi.getStoreList(options),
  });
};

export const useGetStore = (storeId: number) => {
  return useQuery<IBaseResponse<IStoreDetails>, AxiosError<IErrorResponse>>({
    queryKey: storeQueryKey.detail(storeId),
    queryFn: () => storeApi.getStoreDetails(storeId),
  });
};

export const useGetStoreMenus = (storeId: number) => {
  return useQuery<IBaseResponse<IStoreMenuListItem[]>, AxiosError<IErrorResponse>>({
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

export const usePostStoreBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (menuId: number) => storeApi.postStoreBookmark(menuId),
    onSuccess: () => {
      queryClient.invalidateQueries(userQueryKey.storeBookmarks());
    },
  });
};

export const useDeleteStoreBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (menuId: number) => storeApi.deleteStoreBookmark(menuId),
    onSuccess: () => {
      queryClient.invalidateQueries(userQueryKey.storeBookmarks());
    },
  });
};
