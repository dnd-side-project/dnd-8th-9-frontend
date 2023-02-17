import React from "react";
import { reviews } from "@/mocks/mockData/review"; // TODO: msw에서 받아와야 함
import Review from "@/components/Review/Review";
import OverallStats from "@/components/OverallStats/OverallStats";

function ReviewPage() {
  const review = reviews.reviewList[0];
  const { rating, totalReviews, stats } = reviews.overallStats;

  return (
    <>
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      <Review review={review} />
    </>
  );
}

export default ReviewPage;
