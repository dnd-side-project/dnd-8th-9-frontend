import { rest } from "msw";
import { API_URI } from "@/constants/api";
import { BASE_URL, IMockResponse, generateMockResponse } from "./menu";
import { IReviewListItemSpecific, randomReviews } from "../mockData/randomReviewList";

export const reviewHandler = [
  // 리뷰 리스트 조회
  rest.get<IMockResponse<IReviewListItemSpecific[]>>(
    `${BASE_URL}${API_URI.review.get.REVIEW_LIST}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(generateMockResponse(randomReviews)));
    },
  ),

  // 리뷰 상세 조회
  rest.get<IMockResponse<IReviewListItemSpecific>>(
    `${BASE_URL}${API_URI.review.get.REVIEW_LIST}/:reviewId`,
    (req, res, ctx) => {
      const { reviewId } = req.params;

      if (!reviewId) res(ctx.status(400), ctx.json({ message: "메뉴 아이디가 없습니다." }));

      if (Number(reviewId) !== 1)
        res(ctx.status(404), ctx.json({ message: "해당 메뉴가 존재하지 않습니다" }));

      const targetReview = randomReviews.filter(review => review.id === Number(reviewId));
      return res(ctx.status(200), ctx.json(generateMockResponse(targetReview)));
    },
  ),
];
