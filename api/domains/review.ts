import { IBaseResponse, IReviewListItem, IReviewPayloadBody } from "@/types/api";
import { API_URI } from "@/constants/api";
import createMultiFormData from "@/utils/multiFormData";
import { IReviewListItemSpecific } from "@/mocks/mockData/randomReviewList";
import dangdoApi from "../config";

const reviewApi = {
  getReviewList: async () => {
    const { data } = await dangdoApi.get<
      IBaseResponse<IReviewListItem[] | IReviewListItemSpecific[]>
    >(API_URI.review.get.REVIEW_LIST);
    return data;
  },
  getReviewDetails: async (reviewId: number) => {
    const { data } = await dangdoApi.get<IBaseResponse<IReviewListItem | IReviewListItemSpecific>>(
      API_URI.review.get.REVIEW_DETAIL(reviewId),
    );
    return data;
  },
  postReview: async (body: IReviewPayloadBody) => {
    const formData = createMultiFormData<IReviewPayloadBody>(body);
    const { data } = await dangdoApi.post<IBaseResponse<number>>(
      API_URI.review.create.REVIEW,
      formData,
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
