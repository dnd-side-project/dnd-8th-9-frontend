import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { storeTab } from "@/constants/tabs";
import { useGetStore } from "@/hooks/queries/store";

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
  const {
    query: { storeId },
  } = useRouter();
  const { colors } = useTheme();
  const { data: storeDetailsData, isLoading, isError } = useGetStore(Number(storeId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const { canDelivery, canPickup, links, storeImages, reviewStats, reviewCount } =
    storeDetailsData.data;

  return (
    <S.Wrap>
      <S.CarouselWrap>
        <Carousel images={storeImages} bulletMargin="3.2rem" />
      </S.CarouselWrap>
      <S.Main>
        <MainInfo data={storeDetailsData.data} />
        <ReviewInfo reviewStats={reviewStats} reviewCount={reviewCount} />
        <RecieveMethod canDelivery={canDelivery} canPickup={canPickup} />
        <OrderLink links={links} time={10} />
        <Tab menuList={storeTab} target="storeTab" />
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
