/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { reviews } from "@/mocks/mockData/review";
import OverallStats from "@/components/store/review/OverallStats/OverallStats";
import Review from "@/components/store/review/Review/Review";
import * as S from "./review.styled";

function ReviewsPage() {
  const { rating, totalReviews, stats } = reviews.overallStats;

  return (
    <S.Container>
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      <S.ReviewListWrap>
        {reviews.reviewList.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </S.ReviewListWrap>
    </S.Container>
  );
}

export default ReviewsPage;
