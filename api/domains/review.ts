import { IBaseRepsonse, IReviewListItem, IReviewPayloadBody } from "@/types/api";
import { API_URI } from "@/constants/api";
import createMultiFormData from "@/utils/multiFormData";
import dangdoApi from "../config";

const reviewApi = {
  getReviewList: async () => {
    const { data } = await dangdoApi.get<IBaseRepsonse<IReviewListItem[]>>(
      API_URI.review.get.REVIEW_LIST,
    );
    return data;
  },
  getReviewDetails: async (reviewId: number) => {
    const { data } = await dangdoApi.get<IBaseRepsonse<IReviewListItem>>(
      API_URI.review.get.REVIEW_DETAIL(reviewId),
    );
    return data;
  },
  postReview: async (body: IReviewPayloadBody) => {
    const formData = createMultiFormData<IReviewPayloadBody>(body);
    const { data } = await dangdoApi.post<IBaseRepsonse<number>>(
      API_URI.review.create.REVIEW,
      formData,
    );
    return data;
  },
  deleteReview: async (reviewId: number) => {
    const { data } = await dangdoApi.delete<IBaseRepsonse<number>>(
      API_URI.review.delete.REVIEW(reviewId),
    );
    return data;
  },
};

export default reviewApi;
