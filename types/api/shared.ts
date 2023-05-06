export interface IImage {
  id: number;
  type: "MENU_IMAGE" | "STORE_IMAGE" | "REVIEW_IMAGE";
  url: string;
  targetId: number;
}

export interface ILink {
  id: number;
  platform: string;
  url: string;
  role: string;
}

export interface ITable {
  name: string;
  desc: string;
  [key: string]: string;
}

export interface IKeyValue {
  key: string;
  value: string;
  [key: string]: string;
}

export interface ITime {
  day: string;
  hour: string;
  [key: string]: string;
}

export type TCategory = "꽃" | "캐릭터" | "기타" | "포토" | "레터링";

export type TSource = "외부사이트" | "당도" | "단골";

export type TReviewOption =
  | "맛있어요"
  | "응답이 빨라요"
  | "가성비가 좋아요"
  | "친절해요"
  | "선물하기 좋아요";
