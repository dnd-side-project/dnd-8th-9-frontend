import theme from "@/styles/theme";
import { ROUTES } from "./routes";

interface INavigationItem {
  title: string;
  back?: boolean;
  icon?: boolean;
  bgColor?: string;
  scrollBgColor?: string;
  iconColor?: string;
}

interface INavigationHeader {
  [key: string]: INavigationItem;
}

export const NAVIGATION_HEADER: INavigationHeader = {
  // NOTE: 업체 상세 페이지
  [ROUTES.STORE_MENU_LIST_PAGE]: {
    title: "업체명",
    bgColor: "transparent",
    scrollBgColor: theme.colors.white[100],
  },
  [ROUTES.STORE_MENU_ITEM_PAGE]: {
    title: "업체명",
    icon: false,
  },
  [ROUTES.STORE_MENU_ITEM_REVIEWS_PAGE]: {
    title: "리뷰",
    icon: false,
  },
  [ROUTES.STORE_REVIEW_PAGE]: {
    title: "업체명",
    bgColor: "transparent",
    scrollBgColor: "white",
  },
  [ROUTES.STORE_REVIEW_IMAGE_PAGE]: {
    title: "",
    back: true,
    icon: true,
    bgColor: "black",
    scrollBgColor: "",
  },
  [ROUTES.STORE_REVIEWS_PAGE]: {
    title: "리뷰",
    icon: false,
  },
  [ROUTES.STORE_IMAGE_REVIEWS_PAGE]: {
    title: "리뷰",
    icon: false,
  },
  [ROUTES.STORE_IMAGE_REVIEW_ITEM_PAGE]: {
    title: "",
    icon: true,
    bgColor: "black",
    iconColor: "white",
  },
  [ROUTES.STORE_REVIEWS_FORM]: {
    title: "",
    back: false,
    icon: false,
    bgColor: "transparent",
    scrollBgColor: "",
  },
  [ROUTES.STORE_ORDER_FORM_PAGE]: {
    title: "업체명",
    bgColor: "transparent",
    scrollBgColor: "white",
  },
  [ROUTES.STORE_NOTICES_PAGE]: {
    title: "업체명",
    bgColor: "transparent",
    scrollBgColor: "white",
  },
  [ROUTES.STORE_INFO_PAGE]: {
    title: "업체명",
    bgColor: "transparent",
    scrollBgColor: "white",
  },

  // NOTE: 홈페이지
  [ROUTES.HOME_RECOMMENDATION_PAGE]: {
    title: "",
    back: false,
    icon: false,
    bgColor: "transparent",
  },

  [ROUTES.HOME_STORE_PAGE]: {
    title: "",
    back: false,
    icon: false,
    bgColor: "transparent",
  },

  [ROUTES.HOME_REVIEW_PAGE]: {
    title: "",
    back: false,
    icon: false,
    bgColor: "transparent",
    scrollBgColor: "",
  },

  // NOTE: 온보딩 페이지
  [ROUTES.ONBOARDING_LOCATION_PAGE]: {
    title: "",
    back: false,
    icon: false,
    bgColor: "transparent",
  },

  // NOTE: 프로필 페이지
  [ROUTES.PROFILE_PAGE]: {
    title: "",
    back: false,
    icon: false,
    bgColor: "transparent",
  },

  // NOTE: 북마크 페이지
  [ROUTES.MY_BOOKMARK_DESIGN_PAGE]: {
    title: "",
    back: false,
    icon: false,
    bgColor: "transparent",
  },
  "/store/[storeId]": {
    title: "",
    back: false,
    icon: false,
    bgColor: "transparent",
  },
};

export const GNB_VISIBILITY = {
  [ROUTES.STORE_MENU_LIST_PAGE]: true,
  [ROUTES.STORE_MENU_ITEM_PAGE]: true,
  [ROUTES.STORE_MENU_ITEM_REVIEWS_PAGE]: true,
  [ROUTES.STORE_REVIEW_PAGE]: true,
  [ROUTES.STORE_REVIEW_IMAGE_PAGE]: false,
  [ROUTES.STORE_REVIEWS_PAGE]: true,
  [ROUTES.STORE_IMAGE_REVIEWS_PAGE]: false,
  [ROUTES.STORE_IMAGE_REVIEW_ITEM_PAGE]: false,
  [ROUTES.STORE_ORDER_FORM_PAGE]: true,
  [ROUTES.STORE_NOTICES_PAGE]: true,
  [ROUTES.STORE_INFO_PAGE]: true,
  [ROUTES.HOME_RECOMMENDATION_PAGE]: true,
  [ROUTES.PROFILE_PAGE]: true,
  [ROUTES.MY_BOOKMARK_DESIGN_PAGE]: true,
  [ROUTES.ONBOARDING_LOCATION_PAGE]: false,
};
