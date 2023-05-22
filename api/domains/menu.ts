import { API_URI } from "@/constants/api";
import {
  IBaseResponse,
  IMenuDetails,
  IMenuListItem,
  IReviewListItem,
  ISearchOption,
} from "@/types/api";
import { dangdoApi } from "../config/basic";
import { dangdoAuthApi } from "../config/auth";

const menuApi = {
  getMenuList: async (options?: Partial<ISearchOption>) => {
    let encoded = "";
    if (options) {
      encoded = encodeURIComponent(JSON.stringify(options));
    }
    const { data } = await dangdoApi.get<IBaseResponse<IMenuListItem[]>>(
      API_URI.menu.get.MENU_LIST(encoded),
    );
    return data;
  },
  getMenuDetails: async (menuId: number) => {
    const { data } = await dangdoApi.get<IBaseResponse<IMenuDetails>>(
      API_URI.menu.get.MENU_DETAIL(menuId),
    );
    return data;
  },
  getMenuReviews: async (menuId: number) => {
    const { data } = await dangdoApi.get<IBaseResponse<IReviewListItem[]>>(
      API_URI.menu.get.MENU_REVIEWS(menuId),
    );
    return data;
  },
  // NOTE: body 변경가능 / multiFormData로 변경가능
  postMenu: async (body: IMenuDetails) => {
    const { data } = await dangdoApi.post<IBaseResponse<number>>(API_URI.menu.create.MENU, body);
    return data;
  },
  postMenuBookmark: async (menuId: number) => {
    const { data } = await dangdoAuthApi.post<IBaseResponse<number>>(
      API_URI.menu.create.MENU_BOOKMARK(menuId),
    );
    return data;
  },
  // NOTE: body 변경가능 / multiFormData로 변경가능
  putMenu: async (menuId: number, body: IMenuDetails) => {
    const { data } = await dangdoApi.put<IBaseResponse<number>>(
      API_URI.menu.update.MENU(menuId),
      body,
    );
    return data;
  },
  deleteMenu: async (menuId: number) => {
    const { data } = await dangdoApi.delete<IBaseResponse<number>>(
      API_URI.menu.delete.MENU(menuId),
    );
    return data;
  },
  deleteMenuBookmark: async (menuId: number) => {
    const { data } = await dangdoAuthApi.delete<IBaseResponse<number>>(
      API_URI.menu.delete.MENU_BOOKMARK(menuId),
    );
    return data;
  },
};

export default menuApi;
