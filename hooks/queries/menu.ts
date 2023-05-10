import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  IBaseResponse,
  IErrorResponse,
  IMenuDetails,
  IMenuListItem,
  IReviewListItem,
} from "@/types/api";
import menuApi from "@/api/domains/menu";
import { menuQueryKey } from "@/constants/queryKey";

export const useGetMenuList = () => {
  return useQuery<IBaseResponse<IMenuListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: menuQueryKey.list,
    queryFn: () => menuApi.getMenuList(),
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
