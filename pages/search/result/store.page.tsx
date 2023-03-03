import { css, useTheme } from "@emotion/react";
import { resultTab } from "@/constants/tabs";
import { randomMenus } from "@/mocks/mockData/randomMenuList";

import SearchNav from "@/components/search/SearchNav/SearchNav";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import Sort from "@/components/shared/Sort/Sort";
import Tab from "@/components/shared/Tab/Tab";
import * as S from "../search.styled";

function SearchResultStorePage() {
  const { colors } = useTheme();

  return (
    <S.Layout>
      <SearchNav mode="result" />
      <Tab
        menuList={resultTab}
        type="fixed"
        target="resultTab"
        css={css`
          --size: ${resultTab.length};
          --selected-color: ${colors.grey[900]};
          --color: ${colors.grey[700]};
          margin: 1.6rem 0;
        `}
      />
      <Sort />
      <FilterBar />
      <S.Grid>
        {randomMenus.menus.map(menu => (
          <MenuDoubleCard key={menu.id} data={menu} />
        ))}
      </S.Grid>
      <FilterModal />
    </S.Layout>
  );
}

export default SearchResultStorePage;
