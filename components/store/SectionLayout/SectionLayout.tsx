import { storeTab } from "@/constants/tabs";
import { store } from "@/mocks/mockData/store";
import { reviews } from "@/mocks/mockData/review";
import Carousel from "@/components/shared/Carousel/Carousel";
import Tab from "@/components/shared/Tab/Tab";
import { MainInfo, OrderLink, RecieveMethod, ReviewInfo } from "../StoreHero";
import * as S from "./SectionLayout.styled";

interface IProps {
  children: JSX.Element;
}

function SectionLayout({ children }: IProps) {
  const { name, category, location, priceRange, canDelivery, canPickup } = store;
  const { overallStats } = reviews;

  return (
    <S.Wrap>
      <S.CarouselWrap>
        <Carousel images={store.storeImages} bulletMargin="3.2rem" />
      </S.CarouselWrap>
      <S.Main>
        <S.MainInfoSection>
          <MainInfo data={{ name, category, location, priceRange }} />
          <ReviewInfo overallStats={overallStats} />
        </S.MainInfoSection>
        <RecieveMethod canDelivery={canDelivery} canPickup={canPickup} />
        <OrderLink />
        <Tab type="swipeable" menuList={storeTab} target="storeTab" />
        {children}
      </S.Main>
    </S.Wrap>
  );
}

export default SectionLayout;
