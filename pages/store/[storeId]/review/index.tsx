import React from "react";
import { reviews } from "@/mocks/mockData/review"; // TODO: msw에서 받아와야 함
import Review from "@/components/Review/Review";
import OverallStats from "@/components/OverallStats/OverallStats";
import StoreHero from "@/components/Store/StoreHero/StoreHero";
import Tab from "@/components/shared/Tab/Tab";
import { storeTab } from "@/constants/navigations";
import * as S from "@/ui/store/[storeId]/review/review.styled";

function ReviewPage() {
  const { rating, totalReviews, stats } = reviews.overallStats;

  return (
    <>
      <StoreHero />
      <Tab type="swipeable" menuList={storeTab} target="storeTab" />
      <OverallStats rating={rating} totalReviews={totalReviews} stats={stats} />
      <S.ReviewListWrap>
        {reviews.reviewList.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </S.ReviewListWrap>
    </>
  );
}

export default ReviewPage;
