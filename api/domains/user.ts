import { API_URI } from "@/constants/api";
import { IBaseResponse, IMenuListItem, IStoreListItem, IUserResponse } from "@/types/api";
import { dangdoAuthApi } from "../config/auth";

const userApi = {
  getUser: async () => {
    const { data } = await dangdoAuthApi.get<IUserResponse>(API_URI.user.get.USER);
    return data;
  },
  getStoreBookmarkList: async () => {
    const { data } = await dangdoAuthApi.get<IBaseResponse<IStoreListItem[]>>(
      API_URI.user.get.STORE_BOOKMARKS,
    );
    return data;
  },
  getMenuBookmarkList: async () => {
    const { data } = await dangdoAuthApi.get<IBaseResponse<IMenuListItem[]>>(
      API_URI.user.get.MENU_BOOKMARKS,
    );
    return data;
  },
};

export default userApi;
