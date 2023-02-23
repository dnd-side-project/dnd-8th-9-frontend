import { IImage, TReviewOption, TSource } from "./shared";

export interface IReviewItem {
  id: number;
  nickname: string;
  profileImage: string;
  source: TSource;
  rating: number;
  menuOption: string;
  reviewOption: TReviewOption;
  text: string;
  date: string;
  reviewImages: IImage[];
  likes: number;
}

export interface IReviewStatItem {
  optionName: TReviewOption;
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
