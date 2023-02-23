import { store } from "@/mocks/mockData/store";
import { reviews } from "@/mocks/mockData/review";

import Carousel from "@/components/shared/Carousel/Carousel";
import RecieveMethod from "./RecieveMethod/RecieveMethod";
import OrderLink from "./OrderLink/OrderLink";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
import MainInfo from "./MainInfo/MainInfo";

import * as S from "./StoreHero.styled";

function StoreHero() {
  const { name, category, location, priceRange, canDelivery, canPickup } = store;
  const { overallStats } = reviews;

  return (
    <S.Container>
      <S.CarouselWrap>
        <Carousel images={store.storeImages} bulletMargin="3.2rem" />
      </S.CarouselWrap>
      <S.MainInfoSection>
        <MainInfo data={{ name, category, location, priceRange }} />
        <ReviewInfo overallStats={overallStats} />
      </S.MainInfoSection>
      <RecieveMethod canDelivery={canDelivery} canPickup={canPickup} />
      <OrderLink />
    </S.Container>
  );
}

export default StoreHero;
