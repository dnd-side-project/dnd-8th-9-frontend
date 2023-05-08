import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IReviewListItem, IBaseResponse, IErrorResponse, IReviewPayloadBody } from "@/types/api";
import reviewApi from "@/api/domains/review";
import { reviewQueryKey } from "@/constants/queryKey";
import { IReviewListItemSpecific } from "@/mocks/mockData/randomReviewList";

export const useGetReviewList = () => {
  return useQuery<
    IBaseResponse<IReviewListItem[] | IReviewListItemSpecific[]>,
    AxiosError<IErrorResponse>
  >({
    queryKey: reviewQueryKey.list,
    queryFn: () => reviewApi.getReviewList(),
  });
};

export const useGetReviewDetails = (reviewId: number) => {
  return useQuery<IBaseResponse<IReviewListItem>, AxiosError<IErrorResponse>>({
    queryKey: reviewQueryKey.detail(reviewId),
    queryFn: () => reviewApi.getReviewDetails(reviewId),
  });
};

export const usePostReview = (reviewId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newReview: IReviewPayloadBody) => reviewApi.postReview(newReview),
    onSuccess: () => {
      queryClient.invalidateQueries(reviewQueryKey.detail(reviewId));
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => reviewApi.deleteReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries(reviewQueryKey.list);
    },
  });
};
