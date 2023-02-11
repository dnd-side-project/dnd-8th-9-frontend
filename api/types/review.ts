import { ICategory } from "./menu";

export interface IImage {
  id: number;
  url: string;
}

export type TSource = "외부사이트" | "당도";

export type TReviewOption =
  | "맛있어요"
  | "응답이 빨라요"
  | "가성비가 좋아요"
  | "친절해요"
  | "선물하기 좋아요";

export interface IReviewItem {
  nickname: string;
  profileImage: string;
  source: TSource;
  rating: number;
  menuOption: string;
  reviewOption: TReviewOption;
  text: string;
  time: number;
  reviewImages: IImage[];
}

export interface IReviewStatItem {
  optionName: ICategory;
  count: number;
}

export interface IStoreReview {
  overallStats: {
    rating: number;
    totalReviews: number;
    stats: IReviewStatItem[];
  };
  reviewList: IReviewItem[];
}
