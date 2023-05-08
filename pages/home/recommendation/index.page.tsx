import { QueryClient, dehydrate } from "@tanstack/react-query";
import { useTheme } from "@emotion/react";

import useModalStore from "@/store/modal";
import { useGetMenuList } from "@/hooks/queries/menu";
import { useGetReviewList } from "@/hooks/queries/review";
import { menuQueryKey, reviewQueryKey } from "@/constants/queryKey";
import { homeTab } from "@/constants/tabs";
import menuApi from "@/api/domains/menu";
import reviewApi from "@/api/domains/review";

import HomeHero from "@/components/home/HomeHero/HomeHero";
import StoreRank from "@/components/home/StoreRank/StoreRank";
import Tab from "@/components/shared/Tab/Tab";
import Text from "@/components/shared/Text/Text";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
import ReviewDoubleCard from "@/components/shared/Card/ReviewDoubleCard";
import Modal from "@/components/shared/Modal/Modal";
import WelcomeCard from "@/components/onboard/WelcomeCard/WelcomeCard";

import * as S from "./recommendation.styled";

function HomeRecommendationPage() {
  const { colors } = useTheme();
  const { welcomeModalOpen } = useModalStore();

  const { data: menuListData } = useGetMenuList();
  const { data: reviewListData } = useGetReviewList();

  return (
    <>
      {welcomeModalOpen && (
        <Modal>
          <WelcomeCard />
        </Modal>
      )}
      <HomeHero />
      <Tab menuList={homeTab} target="homeTab" />
      <S.ContentWrap>
        <StoreRank />
        <Text weight={600} size={18} as="h2">
          발렌타인데이에 이런 디자인 어때요?
        </Text>
        <S.StoreWrap>
          {menuListData?.data.map(menu => (
            <MenuDoubleCard key={menu.id} data={menu} size="s" />
          ))}
        </S.StoreWrap>
        <Text weight={600} size={18} as="h2">
          마포구 스토어의 리얼리뷰 확인하기
        </Text>
        <S.ReviewWrap>
          {reviewListData?.data.map(review => (
            <ReviewDoubleCard key={review.id} data={review} />
          ))}
        </S.ReviewWrap>
        <S.NoteWrap>
          <Text size={12} color={colors.grey[600]}>
            원하는 케이크를 찾지 못하셨나요?
          </Text>
          <Text size={12} color={colors.grey[600]}>
            스토어 탭에서 필터링을 통해 찾아보세요!
          </Text>
        </S.NoteWrap>
      </S.ContentWrap>
    </>
  );
}

export default HomeRecommendationPage;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery(menuQueryKey.list, () => menuApi.getMenuList()),
    queryClient.prefetchQuery(reviewQueryKey.list, () => reviewApi.getReviewList()),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
