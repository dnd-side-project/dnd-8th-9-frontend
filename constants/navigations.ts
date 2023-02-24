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
    icon: false,
    bgColor: "black",
    iconColor: "white",
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
    icon: false,
    bgColor: "black",
    iconColor: "white",
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
};

export const GNB = {
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
};
