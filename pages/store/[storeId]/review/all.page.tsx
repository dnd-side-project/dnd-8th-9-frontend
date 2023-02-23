import { useState, useEffect } from "react";
import OverallStats from "@/components/store/review/OverallStats/OverallStats";
import ReviewFilter from "@/components/ReviewFilter/ReviewFilter";
import Review from "@/components/store/review/Review/Review";
import { reviews } from "@/mocks/mockData/review";
import * as S from "./review.styled";

function ReviewsPage() {
  const [filterClicked, setFilterClicked] = useState("all");
  const [filteredReviews, setFilteredReviews] = useState(reviews.reviewList);
  const { rating, totalReviews, stats } = reviews.overallStats;

  useEffect(() => {
    const filtered = reviews.reviewList.filter(review => {
      return filterClicked === "all" ? review : review.source === filterClicked;
    });
    setFilteredReviews(filtered);
  }, [filterClicked]);

  return (
    <S.Container>
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      <S.ReviewListWrap>
        <ReviewFilter filterClicked={filterClicked} setFilterClicked={setFilterClicked} />
        {filteredReviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </S.ReviewListWrap>
    </S.Container>
  );
}

export default ReviewsPage;
