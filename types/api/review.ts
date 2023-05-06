import { IImage, TReviewOption } from "./shared";

// NOTE: nickname, profileImage, date, like 필요
export interface IReviewListItem {
  id: number;
  menuName: string;
  content: string;
  dangdo: number;
  goodPoint: TReviewOption;
  reorder: boolean;
  reviewImages: IImage[];
}

export interface IReviewStatItem {
  optionName: TReviewOption;
  count: number;
}

export interface IOverallStats {
  rating: number;
  totalReviews: number;
  stats: IReviewStatItem[];
}

export interface IStoreReview {
  overallStats: IOverallStats;
  reviewList: IReviewListItem[];
}
