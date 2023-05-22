import { IBaseResponse, IReviewListItem } from "@/types/api";
import { API_URI } from "@/constants/api";
import { dangdoApi } from "../config/basic";
import { dangdoAuthApi } from "../config/auth";

const reviewApi = {
  getReviewList: async () => {
    const { data } = await dangdoApi.get<IBaseResponse<IReviewListItem[]>>(
      API_URI.review.get.REVIEW_LIST,
    );
    return data;
  },
  getReviewDetails: async (reviewId: number) => {
    const { data } = await dangdoApi.get<IBaseResponse<IReviewListItem>>(
      API_URI.review.get.REVIEW_DETAIL(reviewId),
    );
    return data;
  },
  postReview: async (body: FormData) => {
    const { data } = await dangdoAuthApi.post<IBaseResponse<number>>(
      API_URI.review.create.REVIEW,
      body,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    return data;
  },
  deleteReview: async (reviewId: number) => {
    const { data } = await dangdoApi.delete<IBaseResponse<number>>(
      API_URI.review.delete.REVIEW(reviewId),
    );
    return data;
  },
};

export default reviewApi;
