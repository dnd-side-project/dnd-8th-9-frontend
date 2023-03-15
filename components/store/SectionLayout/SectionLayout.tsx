import { useTheme } from "@emotion/react";
import { storeTab } from "@/constants/tabs";
import { store } from "@/mocks/mockData/store";
import { reviews } from "@/mocks/mockData/review";

import Carousel from "@/components/shared/Carousel/Carousel";
import Tab from "@/components/shared/Tab/Tab";
import Text from "@/components/shared/Text/Text";
import Icon from "@/components/shared/Icon/Icon";
import { MainInfo, OrderLink, RecieveMethod, ReviewInfo } from "../StoreHero";
import * as S from "./SectionLayout.styled";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

function SectionLayout({ children }: IProps) {
  const { colors } = useTheme();
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
      <S.Footer>
        <S.FooterButton type="button" shape="round" label="write review">
          <Icon name="pencil" size="m" color={colors.grey[100]} />
          <Text size={18} weight={600} color={colors.grey[100]}>
            리뷰 작성
          </Text>
        </S.FooterButton>
      </S.Footer>
    </S.Wrap>
  );
}

export default SectionLayout;
