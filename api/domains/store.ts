import {
  IBaseResponse,
  IMenuDetails,
  IMenuListItem,
  IReviewListItem,
  IStoreDetails,
  IStoreListItem,
  IStorePayloadBody,
} from "@/types/api";
import { API_URI } from "@/constants/api";
import createMultiFormData from "@/utils/multiFormData";
import { IRandomMenuListItem } from "@/mocks/mockData/randomMenuList";
import { IMenuListItemSimple } from "@/mocks/mockData/menuList";
import dangdoApi from "../config";

const storeApi = {
  getStoreList: async () => {
    const { data } = await dangdoApi.get<IBaseResponse<IStoreListItem[]>>(
      API_URI.store.get.STORE_LIST,
    );
    return data;
  },
  getStoreDetails: async (storeId: number) => {
    const { data } = await dangdoApi.get<IBaseResponse<IStoreDetails>>(
      API_URI.store.get.STORE_DETAIL(storeId),
    );
    return data;
  },
  getStoreMenus: async (storeId: number) => {
    const { data } = await dangdoApi.get<
      IBaseResponse<IMenuDetails[] | IRandomMenuListItem[] | IMenuListItemSimple[]>
    >(API_URI.store.get.STORE_MENUS(storeId));
    return data;
  },
  getStoreReviews: async (storeId: number) => {
    const { data } = await dangdoApi.get<IBaseResponse<IReviewListItem[]>>(
      API_URI.store.get.STORE_REVIEWS(storeId),
    );
    return data;
  },
  // NOTE: body 변경가능
  postStore: async (body: IStorePayloadBody) => {
    const formData = createMultiFormData<IStorePayloadBody>(body);
    const { data } = await dangdoApi.post<IBaseResponse<number>>(
      API_URI.store.create.STORE,
      formData,
    );
    return data;
  },
  postStoreBookmark: async (storeId: number) => {
    const { data } = await dangdoApi.post<IBaseResponse<number>>(
      API_URI.store.create.STORE_BOOKMARK(storeId),
    );
    return data;
  },
  // NOTE: body 변경가능
  putStore: async ({ storeId, body }: { storeId: number; body: IStorePayloadBody }) => {
    const formData = createMultiFormData<IStorePayloadBody>(body);
    const { data } = await dangdoApi.put<IBaseResponse<number>>(
      API_URI.store.update.STORE(storeId),
      formData,
    );
    return data;
  },
  deleteStore: async (storeId: number) => {
    const { data } = await dangdoApi.delete<IBaseResponse<number>>(
      API_URI.store.delete.STORE(storeId),
    );
    return data;
  },
  deleteStoreBookmark: async (storeId: number) => {
    const { data } = await dangdoApi.delete<IBaseResponse<number>>(
      API_URI.store.delete.STORE_BOOKMARK(storeId),
    );
    return data;
  },
};

export default storeApi;
