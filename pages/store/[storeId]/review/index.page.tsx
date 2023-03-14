import { reviews as MockReviews } from "@/mocks/mockData/review";
import useReviewStore from "@/store/review";

import Preview from "@/components/store/review/Preview/Preview";
import OverallStats from "@/components/store/review/OverallStats/OverallStats";
import Review from "@/components/store/review/Review/Review";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import * as S from "./review.styled";

function ReviewPage() {
  const { rating, totalReviews, stats } = MockReviews.overallStats;
  const reviewImages = MockReviews.reviewList.map(review => review.reviewImages).flat();
  const { reviews } = useReviewStore();

  return (
    <SectionLayout>
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      <S.PreviewWrap>
        <Preview reviewImages={reviewImages} />
      </S.PreviewWrap>
      <S.ReviewListWrap>
        {/* {MockReviews.reviewList.map(review => (
          <Review key={review.id} review={review} />
        ))} */}
        {reviews
          .slice(0)
          .reverse()
          .map(review => (
            <Review key={review.id} review={review} />
          ))}
      </S.ReviewListWrap>
    </SectionLayout>
  );
}

export default ReviewPage;
