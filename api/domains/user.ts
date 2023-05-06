import { API_URI } from "@/constants/api";
import { IBaseRepsonse, IMenuListItem, IStoreListItem, IUserResponse } from "@/types/api";
import dangdoApi from "../config";

const userApi = {
  getUser: async () => {
    const { data } = await dangdoApi.get<IUserResponse>(API_URI.user.get.USER);
    return data;
  },
  getStoreBookmarkList: async () => {
    const { data } = await dangdoApi.get<IBaseRepsonse<IStoreListItem[]>>(
      API_URI.user.get.STORE_BOOKMARKS,
    );
    return data;
  },
  getMenuBookmarkList: async () => {
    const { data } = await dangdoApi.get<IBaseRepsonse<IMenuListItem[]>>(
      API_URI.user.get.MENU_BOOKMARKS,
    );
    return data;
  },
};

export default userApi;
