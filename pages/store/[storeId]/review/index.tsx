import React from "react";
import { reviews } from "@/mocks/mockData/review"; // TODO: msw에서 받아와야 함
import Review from "@/components/Review/Review";

function ReviewPage() {
  const review = reviews.reviewList[0];

  return <Review review={review} />;
}

export default ReviewPage;
