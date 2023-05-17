import { TCategory, TPlatform, TRecieveMethod, TSort } from "../api";

// body값이랑 store값이랑 1:1 대응 상수 타입
export interface IMappingPayloadToStoreObject {
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

export interface IMappingStoreToPayloadObject {
  keys: {
    카테고리: string;
    주문플랫폼: string;
    수령방법: string;
  };
  주문플랫폼: {
    "카카오톡 채널": string;
    인스타그램: string;
    "업체 홈페이지": string;
    아이디어스: string;
    네이버스토어: string;
  };
  수령방법: {
    "택배로 배송": string;
    "매장에서 픽업": string;
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
