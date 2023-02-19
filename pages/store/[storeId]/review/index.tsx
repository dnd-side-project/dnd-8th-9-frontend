import React from "react";
import { reviews } from "@/mocks/mockData/review"; // TODO: msw에서 받아와야 함
import Review from "@/components/Review/Review";
import OverallStats from "@/components/OverallStats/OverallStats";

function ReviewPage() {
  const { rating, totalReviews, stats } = reviews.overallStats;

  return (
    <>
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      {reviews.reviewList.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </>
  );
}

export default ReviewPage;
