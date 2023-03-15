import { css, useTheme } from "@emotion/react";
import { storeTab } from "@/constants/tabs";
import { store } from "@/mocks/mockData/store";
import { reviews } from "@/mocks/mockData/review";
import Carousel from "@/components/shared/Carousel/Carousel";
import Tab from "@/components/shared/Tab/Tab";
import { MainInfo, OrderLink, RecieveMethod, ReviewInfo } from "../StoreHero";
import * as S from "./SectionLayout.styled";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

function SectionLayout({ children }: IProps) {
  const { canDelivery, canPickup, links, averageReservationNeededTime } = store;
  const { overallStats } = reviews;
  const { colors } = useTheme();

  return (
    <S.Wrap>
      <S.CarouselWrap>
        <Carousel images={store.storeImages} bulletMargin="3.2rem" />
      </S.CarouselWrap>
      <S.Main>
        <MainInfo data={store} />
        <ReviewInfo overallStats={overallStats} />
        <RecieveMethod canDelivery={canDelivery} canPickup={canPickup} />
        <OrderLink links={links} time={averageReservationNeededTime} />
        <Tab
          type="fixed"
          menuList={storeTab}
          target="storeTab"
          cssProp={css`
            --size: ${storeTab.length};
            --selected-color: ${colors.grey[900]};
          `}
        />
        {children}
      </S.Main>
    </S.Wrap>
  );
}

export default SectionLayout;
