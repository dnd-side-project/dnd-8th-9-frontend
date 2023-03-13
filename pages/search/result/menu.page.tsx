import { useEffect, useState } from "react";
import { css, useTheme } from "@emotion/react";
import { resultTab } from "@/constants/tabs";
import { IRandomMenuItem } from "@/api/types/randomMenuList";
import { randomMenus } from "@/mocks/mockData/randomMenuList";
import useSearchStore from "@/store/search";
import useFilterStore from "@/store/filter";

import NoResult from "@/components/search/NoResult/NoResult";
import SearchNav from "@/components/search/SearchNav/SearchNav";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import Sort from "@/components/shared/Sort/Sort";
import Tab from "@/components/shared/Tab/Tab";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
import * as S from "../search.styled";

function SearchResultMenuPage() {
  const { colors } = useTheme();
  const { currentSearch } = useSearchStore();
  const { selectedFilterOptions } = useFilterStore();
  const [searchResult, setSearchResult] = useState<IRandomMenuItem[]>([]);
  const [filterResult, setFilterResult] = useState<IRandomMenuItem[]>([]);
  const [data, setData] = useState<IRandomMenuItem[]>(searchResult || filterResult || []);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    const result = randomMenus.menus.filter(menu => menu.name.includes(currentSearch));
    setSearchResult(result);
    setData(result);
  }, [currentSearch]);

  useEffect(() => {
    if (
      Object.keys(selectedFilterOptions).some(filter => selectedFilterOptions[filter].length !== 0)
    ) {
      const result = searchResult.filter(menu => menu.price > 40000);
      setFilterResult(result);
      setData(result);
    }
  }, [searchResult, selectedFilterOptions]);

  useEffect(() => {
    if (data.length) setNoResult(false);
    if (!data.length) setNoResult(true);
  }, [data]);

  return (
    <S.Layout>
      <SearchNav mode="result" />
      {noResult ? (
        <NoResult currentSearch={currentSearch} />
      ) : (
        <>
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
          <S.MenuGrid>
            {data.map(menu => (
              <MenuDoubleCard key={menu.id} data={menu} />
            ))}
          </S.MenuGrid>
          <FilterModal />
        </>
      )}
    </S.Layout>
  );
}

export default SearchResultMenuPage;
