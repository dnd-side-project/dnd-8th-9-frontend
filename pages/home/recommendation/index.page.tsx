import { css, useTheme } from "@emotion/react";
import { homeTab } from "@/constants/tabs";
import { randomMenus } from "@/mocks/mockData/randomMenuList";
import { randomReviews } from "@/mocks/mockData/randomReviewList";
import HomeHero from "@/components/home/HomeHero/HomeHero";
import Tab from "@/components/shared/Tab/Tab";
import StoreRank from "@/components/home/StoreRank/StoreRank";
import Text from "@/components/shared/Text/Text";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
import ReviewDoubleCard from "@/components/shared/Card/ReviewDoubleCard";
import * as S from "./recommendation.styled";

function HomeRecommendationPage() {
  const { colors } = useTheme();

  return (
    <>
      <HomeHero />
      <Tab
        menuList={homeTab}
        type="fixed"
        target="homeTab"
        cssProp={css`
          --size: ${homeTab.length};
          --selected-color: ${colors.grey[900]};
          --color: ${colors.grey[300]};
        `}
      />
      <S.ContentWrap>
        <StoreRank />
        <Text
          weight={600}
          size={18}
          css={css`
            margin-top: 3.2rem;
            display: block;
          `}
        >
          발렌타인데이에 이런 디자인 어때요?
        </Text>
        <S.StoreWrap>
          {randomMenus.menus.map(menu => (
            <MenuDoubleCard key={menu.id} data={menu} size="s" />
          ))}
        </S.StoreWrap>
        <Text
          weight={600}
          size={18}
          css={css`
            margin-top: 4.8rem;
            display: block;
          `}
        >
          마포구 스토어의 리얼리뷰 확인하기
        </Text>
        <S.ReviewWrap>
          {randomReviews.map(review => (
            <ReviewDoubleCard key={review.id} data={review} />
          ))}
        </S.ReviewWrap>
      </S.ContentWrap>
    </>
  );
}

export default HomeRecommendationPage;
