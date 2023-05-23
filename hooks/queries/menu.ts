import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  IBaseResponse,
  IErrorResponse,
  IMenuDetails,
  IMenuListItem,
  IReviewListItem,
  ISearchOption,
} from "@/types/api";
import menuApi from "@/api/domains/menu";
import { menuQueryKey, userQueryKey } from "@/constants/queryKey";

export const useGetMenuList = (options?: Partial<ISearchOption>) => {
  return useQuery<IBaseResponse<IMenuListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: menuQueryKey.list,
    queryFn: () => menuApi.getMenuList(options),
  });
};

export const useGetMenuDetails = (menuId: number) => {
  return useQuery<IBaseResponse<IMenuDetails>, AxiosError<IErrorResponse>>({
    queryKey: menuQueryKey.detail(menuId),
    queryFn: () => menuApi.getMenuDetails(menuId),
  });
};

export const useGetMenuReviews = (menuId: number) => {
  return useQuery<IBaseResponse<IReviewListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: menuQueryKey.reviews(menuId),
    queryFn: () => menuApi.getMenuReviews(menuId),
  });
};

export const usePostMenuBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (menuId: number) => menuApi.postMenuBookmark(menuId),
    onSuccess: () => {
      queryClient.invalidateQueries(userQueryKey.menuBookmarks());
    },
  });
};

export const useDeleteMenuBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (menuId: number) => menuApi.deleteMenuBookmark(menuId),
    onSuccess: () => {
      queryClient.invalidateQueries(userQueryKey.menuBookmarks());
    },
  });
};
