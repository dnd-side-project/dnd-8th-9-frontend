/* eslint-disable @typescript-eslint/restrict-template-expressions */
export const URI_PATH = {
  STORE: "/stores",
  MENU: "/menus",
  REVIEW: "/reviews",
  USER: "/users",
};

export const API_URI = {
  store: {
    get: {
      STORE_LIST: `${URI_PATH.STORE}`,
      STORE_DETAIL: (storeId: number) => `${URI_PATH.STORE}/${storeId}`,
      STORE_MENUS: (storeId: number) => `${URI_PATH.STORE}/${storeId}/menus`,
      STORE_REVIEWS: (storeId: number) => `${URI_PATH.STORE}/${storeId}/reviews`,
    },
    create: {
      STORE: `${URI_PATH.STORE}`,
      STORE_BOOKMARK: (storeId: number) => `${URI_PATH.STORE}/${storeId}/bookmarks`,
    },
    update: {
      STORE: (storeId: number) => `${URI_PATH.STORE}/${storeId}`,
    },
    delete: {
      STORE: (storeId: number) => `${URI_PATH.STORE}/${storeId}`,
      STORE_BOOKMARK: (storeId: number) => `${URI_PATH.STORE}/${storeId}/bookmarks`,
    },
  },
  menu: {
    get: {
      MENU_LIST: `${URI_PATH.MENU}`,
      MENU_DETAIL: (menuId: number) => `${URI_PATH.MENU}/${menuId}`,
      MENU_REVIEWS: (menuId: number) => `${URI_PATH.MENU}/${menuId}/reviews`,
    },
    create: {
      MENU: `${URI_PATH.MENU}`,
      MENU_BOOKMARK: (menuId: number) => `${URI_PATH.MENU}/${menuId}/bookmarks`,
    },
    update: {
      MENU: (menuId: number) => `${URI_PATH.MENU}/${menuId}`,
    },
    delete: {
      MENU: (menuId: number) => `${URI_PATH.MENU}/${menuId}`,
      MENU_BOOKMARK: (menuId: number) => `${URI_PATH.MENU}/${menuId}/bookmarks`,
    },
  },
  review: {
    get: {
      REVIEW_LIST: `${URI_PATH.REVIEW}`,
      REVIEW_DETAIL: (reviewId: number) => `${URI_PATH.REVIEW}/${reviewId}`,
    },
    create: {
      REVIEW: `${URI_PATH.REVIEW}`,
    },
    delete: {
      REVIEW: (reviewId: number) => `${URI_PATH.REVIEW}/${reviewId}`,
    },
  },
  user: {
    get: {
      USER: `${URI_PATH.USER}`,
      STORE_BOOKMARKS: `${URI_PATH.USER}/store-bookmarks`,
      MENU_BOOKMARKS: `${URI_PATH.USER}/menu-bookmarks`,
    },
  },
};

export const LOGIN_REDIRECT_URI = `${process.env.NEXT_PUBLIC_API_KEY}/oauth2/authorization/kakao?redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/oauth/redirect`;
export const IMAGE_MOCK = "https://via.placeholder.com/640x480";
