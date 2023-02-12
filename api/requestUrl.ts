export const BASE_URL = "https://dangdo.com";

export const REQUEST_URL = {
  STORE_LIST: "/store",
  STORE_ITEM: (storeId: number) => `/store/${storeId}`,
  MENU_LIST: (storeId: number) => `/store/${storeId}/menu`,
  MENU_ITEM: (storeId: number, menuId: number) => `/store/${storeId}/menu/${menuId}`,
  REVIEW_LIST: (storeId: number) => `/store/${storeId}/review`,
  REVIEW_ITEM: (storeId: number, reviewId: number) => `/store/${storeId}/menu/${reviewId}`,
};
