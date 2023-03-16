import { reviews as MockReviews } from "@/mocks/mockData/review";
// import useReviewStore from "@/store/review";
import PreviewImage from "@/components/store/review/PreviewImage/PreviewImage";
import ReviewFilter from "@/components/ReviewFilter/ReviewFilter";
import OverallStats from "@/components/store/review/OverallStats/OverallStats";
import Review from "@/components/store/review/Review/Review";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import Sort from "@/components/shared/Sort/Sort";
import * as S from "./review.styled";

function ReviewPage() {
  const { rating, totalReviews, stats } = MockReviews.overallStats;
  const reviewImages = MockReviews.reviewList.map(review => review.reviewImages).flat();
  // const { reviews } = useReviewStore();

  return (
    <SectionLayout>
      <S.ContentWrap>
        <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
        <PreviewImage reviewImages={reviewImages} />
        <S.ReviewContent>
          <S.ReviewTitle as="p" size={16} weight={600}>
            전체 <strong>{MockReviews.reviewList.length}</strong>건
          </S.ReviewTitle>
          <ReviewFilter />
          <Sort />
          <div>
            {MockReviews.reviewList.map(review => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </S.ReviewContent>
      </S.ContentWrap>
    </SectionLayout>
  );
}

export default ReviewPage;
