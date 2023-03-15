import { reviews as MockReviews } from "@/mocks/mockData/review";
import useReviewStore from "@/store/review";

import PreviewImage from "@/components/store/review/PreviewImage/PreviewImage";
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
      <S.ContentWrap>
        <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
        <PreviewImage reviewImages={reviewImages} />
        <S.ReviewListWrap>
          {reviews.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </S.ReviewListWrap>
      </S.ContentWrap>
    </SectionLayout>
  );
}

export default ReviewPage;
