import { reviews as MockReviews } from "@/mocks/mockData/review";
import useReviewStore from "@/store/review";
import { storeTab } from "@/constants/tabs";
import Tab from "@/components/shared/Tab/Tab";
import Preview from "@/components/store/review/Preview/Preview";
import StoreHero from "@/components/store/StoreHero/StoreHero";
import OverallStats from "@/components/store/review/OverallStats/OverallStats";
import Review from "@/components/store/review/Review/Review";
import * as S from "./review.styled";

function ReviewPage() {
  const { rating, totalReviews, stats } = MockReviews.overallStats;
  const reviewImages = MockReviews.reviewList.map(review => review.reviewImages).flat();
  const { reviews } = useReviewStore();

  return (
    <S.Container>
      <StoreHero />
      <Tab type="swipeable" menuList={storeTab} target="storeTab" />
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      <S.PreviewWrap>
        <Preview reviewImages={reviewImages} />
      </S.PreviewWrap>
      <S.ReviewListWrap>
        {/* {MockReviews.reviewList.map(review => (
          <Review key={review.id} review={review} />
        ))} */}
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </S.ReviewListWrap>
    </S.Container>
  );
}

export default ReviewPage;
