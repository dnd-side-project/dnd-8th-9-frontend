import { TCategory, TPlatform, TRecieveMethod, TSort } from "../api";

// body값이랑 store값이랑 1:1 대응 상수 타입
export interface IMappingObject {
  keys: {
    categories: string;
    minPrice: string;
    maxPrice: string;
    platforms: string;
    receive: string;
  };
  platforms: {
    KAKAO: string;
    INSTAGRAM: string;
    WEBSITE: string;
    IDIUS: string;
    NAVER: string;
  };
  receive: {
    canDelivery: string;
    canPickup: string;
  };
}

// NOTE: filter modal 저장값
export interface IFilterStore {
  카테고리: TCategory[];
  가격: string;
  주문플랫폼: string[];
  수령방법: string;
}

// NOTE: 백엔드 api body값
export interface IFilterPayload {
  categories: TCategory[];
  minPrice: number;
  maxPrice: number;
  platforms: TPlatform[];
  receive: TRecieveMethod | string;
  search: string;
  sort: TSort | string;
  page: number;
}

export type TFilterPayload = Pick<
  IFilterPayload,
  "categories" | "maxPrice" | "minPrice" | "platforms" | "receive"
>;
