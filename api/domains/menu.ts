import { API_URI } from "@/constants/api";
import { IBaseResponse, IMenuDetails, IMenuListItem, IReviewListItem } from "@/types/api";
import dangdoApi from "../config";

const menuApi = {
  getMenuList: async () => {
    const { data } = await dangdoApi.get<IBaseResponse<IMenuListItem[]>>(
      API_URI.menu.get.MENU_LIST,
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
    const { data } = await dangdoApi.post<IBaseResponse<number>>(
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
    const { data } = await dangdoApi.delete<IBaseResponse<number>>(
      API_URI.menu.delete.MENU_BOOKMARK(menuId),
    );
    return data;
  },
};

export default menuApi;
