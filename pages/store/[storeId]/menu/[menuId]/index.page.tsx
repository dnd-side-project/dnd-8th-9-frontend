/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import { menuQueryKey } from "@/constants/queryKey";
import { storeMenuTab } from "@/constants/tabs";
import menuApi from "@/api/domains/menu";
import { IDetailInfo } from "@/types/api";
import { menu as mockMenu } from "@/mocks/mockData/menu";
import { useGetMenuDetails, useGetMenuReviews } from "@/hooks/queries/menu";
import { checkAuth } from "@/utils/util";

import { MenuHero, MenuSize, MenuTaste, MenuDesign, MenuCaution } from "@/components/store/menu";
import Review from "@/components/store/review/Review/Review";
import ReviewFilter from "@/components/ReviewFilter/ReviewFilter";
import Sort from "@/components/shared/Sort/Sort";
import Tab from "@/components/shared/Tab/Tab";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
import * as S from "./menuItem.styled";

const MENU_DATA = (parsedMockDetailInfo: IDetailInfo) => [
  {
    title: "사이즈",
    id: "size",
    children: <MenuSize size={parsedMockDetailInfo.size} />,
  },
  {
    title: "맛 선택",
    id: "flavor",
    children: <MenuTaste taste={parsedMockDetailInfo.taste} />,
  },
  {
    title: "모양변경",
    id: "variation",
    children: <MenuDesign design={parsedMockDetailInfo.design} />,
  },
  {
    title: "주의사항",
    id: "caution",
    children: <MenuCaution caution={parsedMockDetailInfo.caution} />,
  },
];

function MenuDetailsPage() {
  const { colors } = useTheme();
  const {
    query: { menuId, storeId },
  } = useRouter();

  const { data: menuDetailsData } = useGetMenuDetails(Number(menuId));
  const { data: menuReviewsData } = useGetMenuReviews(Number(menuId));
  const parsedMockDetailInfo: IDetailInfo = JSON.parse(mockMenu.detailInfo);

  if (menuDetailsData === undefined) return <h1>no data</h1>;

  const handleAuthCheck = () => {
    checkAuth();
  };

  return (
    <div>
      <MenuHero data={menuDetailsData.data} />
      <Tab menuList={storeMenuTab} target="storeMenuTab" />
      {MENU_DATA(parsedMockDetailInfo).map(({ title, children, id }) => (
        <S.MenuContentBox key={title} title={title} name={id}>
          {children}
        </S.MenuContentBox>
      ))}
      <S.ReviewListWrap id="review">
        <S.ReviewHeader>
          <S.ReviewTitle as="p" size={16} weight={600}>
            이 메뉴의 리뷰 <strong>{menuReviewsData?.data.length}</strong>건
          </S.ReviewTitle>
          <S.ReviewWriteButtonLink
            href={`/store/${storeId as string}/review/form`}
            onClick={handleAuthCheck}
          >
            <Icon name="pencil" size="s" color={colors.grey[800]} />
            <Text weight={500} color={colors.grey[800]}>
              리뷰작성
            </Text>
          </S.ReviewWriteButtonLink>
        </S.ReviewHeader>
        <ReviewFilter />
        <Sort />
        <div>
          {menuReviewsData?.data.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </S.ReviewListWrap>
    </div>
  );
}

export default MenuDetailsPage;

export async function getServerSideProps({ params: { menuId } }: { params: { menuId: string } }) {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(menuQueryKey.detail(Number(menuId)), () =>
      menuApi.getMenuDetails(Number(menuId)),
    ),
    queryClient.prefetchQuery(menuQueryKey.reviews(Number(menuId)), () =>
      menuApi.getMenuReviews(Number(menuId)),
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
