import { css, useTheme } from "@emotion/react";
import { homeTab } from "@/constants/tabs";
import { randomMenus } from "@/mocks/mockData/randomMenuList";
import HomeHero from "@/components/home/HomeHero/HomeHero";
import Tab from "@/components/shared/Tab/Tab";
import StoreRank from "@/components/home/StoreRank/StoreRank";
import Text from "@/components/shared/Text/Text";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
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
      </S.ContentWrap>
    </>
  );
}

export default HomeRecommendationPage;
