import { css, useTheme } from "@emotion/react";
import { homeTab } from "@/constants/tabs";
import HomeHero from "@/components/home/HomeHero/HomeHero";
import Tab from "@/components/shared/Tab/Tab";

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
    </>
  );
}

export default HomeRecommendationPage;
