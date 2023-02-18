import React from "react";
import { reviews } from "@/mocks/mockData/review"; // TODO: msw에서 받아와야 함
import Review from "@/components/Review/Review";
import OverallStats from "@/components/OverallStats/OverallStats";

function ReviewPage() {
  const review = reviews.reviewList[0];
  const { rating, totalReviews, stats } = reviews.overallStats;

  const BEST_REVIEW_DETAIL = stats.reduce((prev, cur) => {
    return prev.count < cur.count ? cur : prev;
  });

  return (
    <>
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      <Review review={review} bestReviewDetail={BEST_REVIEW_DETAIL.optionName} />
    </>
  );
}

export default ReviewPage;
