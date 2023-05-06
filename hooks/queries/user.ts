import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  IErrorResponse,
  IUserResponse,
  IBaseResponse,
  IStoreListItem,
  IMenuListItem,
} from "@/types/api";
import userApi from "@/api/domains/user";
import { userQueryKey } from "@/constants/queryKey";

export const useGetUser = () => {
  return useQuery<IUserResponse, AxiosError<IErrorResponse>>({
    queryKey: userQueryKey.detail,
    queryFn: () => userApi.getUser(),
  });
};

export const useGetStoreBookmarkList = () => {
  return useQuery<IBaseResponse<IStoreListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: userQueryKey.storeBookmarks(),
    queryFn: () => userApi.getStoreBookmarkList(),
  });
};

export const useGetMenuBookmarkList = () => {
  return useQuery<IBaseResponse<IMenuListItem[]>, AxiosError<IErrorResponse>>({
    queryKey: userQueryKey.menuBookmarks(),
    queryFn: () => userApi.getMenuBookmarkList(),
  });
};
