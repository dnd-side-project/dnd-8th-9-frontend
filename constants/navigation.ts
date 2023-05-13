import theme from "@/styles/theme";
import { ROUTES } from "./routes";

export interface INav {
  text?: string;
  previous?: boolean;
  home?: boolean;
  bookmark?: boolean;
  share?: boolean;
  search?: boolean;
  bgColor?: string;
  color?: string;
}

export interface INavigationItem {
  gnb?: boolean;
  nav?: INav;
  auth?: boolean;
}

export interface IRouteNav {
  [key: string]: INavigationItem;
}

export const ROUTES_NAV: IRouteNav = {
  [ROUTES.STORE_MENU_LIST_PAGE]: {
    nav: {
      previous: true,
      home: true,
      search: true,
    },
  },
  [ROUTES.STORE_MENU_ITEM_PAGE]: {
    nav: {
      previous: true,
      home: true,
      text: "업체이름",
    },
  },
  [ROUTES.STORE_REVIEWS_PAGE]: {
    nav: {
      previous: true,
      home: true,
      search: true,
    },
  },
  [ROUTES.STORE_REVIEWS_ENHANCED_PAGE]: {
    nav: {
      previous: true,
      home: true,
      bgColor: "black",
      color: theme.colors.grey[100],
    },
  },
  [ROUTES.STORE_IMAGE_REVIEWS_PAGE]: {
    nav: {
      previous: true,
      home: true,
      text: "리뷰",
      bookmark: true,
      share: true,
    },
  },
  [ROUTES.STORE_IMAGE_REVIEW_ITEM_PAGE]: {
    nav: {
      previous: true,
      home: true,
      bgColor: "black",
      color: theme.colors.grey[100],
    },
  },

  [ROUTES.STORE_ORDER_FORM_PAGE]: {
    nav: {
      previous: true,
      home: true,
      search: true,
    },
  },
  [ROUTES.STORE_NOTICES_PAGE]: {
    nav: {
      previous: true,
      home: true,
      search: true,
    },
  },
  [ROUTES.HOME_RECOMMENDATION_PAGE]: {
    gnb: true,
  },
  [ROUTES.HOME_STORE_PAGE]: {
    gnb: true,
  },
  [ROUTES.LOGIN_REDIRECT_PAGE]: {
    nav: {
      previous: true,
      bgColor: theme.colors.blue[900],
      color: theme.colors.grey[100],
    },
  },
  [ROUTES.SEARCH_PAGE]: {
    gnb: true,
  },
  [ROUTES.SEARCH_RESULT_MENU_PAGE]: {
    gnb: true,
  },
  [ROUTES.SEARCH_RESULT_STORE_PAGE]: {
    gnb: true,
  },
  [ROUTES.MY_BOOKMARK_DESIGN_PAGE]: {
    auth: true,
  },
  [ROUTES.MY_BOOKMARK_STORE_PAGE]: {
    auth: true,
  },
  [ROUTES.MYPAGE]: {
    gnb: true,
    nav: {
      text: "마이페이지",
    },
    auth: true,
  },
  [ROUTES.MYPAGE_PROFILE]: {
    gnb: true,
    nav: { previous: true, text: "회원정보수정" },
    auth: true,
  },
  [ROUTES.MYPAGE_ONBOARD]: {
    gnb: true,
    nav: { previous: true, home: true, text: "맞춤정보 수정" },
    auth: true,
  },
  [ROUTES.MYPAGE_ONBOARD_LOCATION]: {
    nav: { previous: true, home: true, text: "선호지역" },
    auth: true,
  },
  [ROUTES.MYPAGE_ONBOARD_CATEGORY]: {
    nav: { previous: true, home: true, text: "관심 케이크 스타일" },
    auth: true,
  },
  [ROUTES.MYPAGE_REVIEW]: {
    gnb: true,
    nav: { previous: true, text: "리뷰관리" },
    auth: true,
  },
  [ROUTES.MYPAGE_SETTINGS]: {
    gnb: true,
    nav: { previous: true, text: "환경설정" },
    auth: true,
  },
  [ROUTES.MYPAGE_NOTICE]: {
    gnb: true,
    nav: { previous: true, text: "공지사항" },
    auth: true,
  },
  [ROUTES.ONBOARD_WELCOME]: {
    auth: true,
  },
  [ROUTES.ONBOARDING_LOCATION_PAGE]: {
    auth: true,
  },
  [ROUTES.ONBOARDING_CATEGORY_PAGE]: {
    auth: true,
  },
};
