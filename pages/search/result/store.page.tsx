import { useEffect, useState } from "react";
import { resultTab } from "@/constants/tabs";
import { storeList } from "@/mocks/mockData/storeList";
import useSearchStore from "@/store/search";
import useFilterStore from "@/store/filter";
import { IStoreListItem, TCategory } from "@/types/api";

import SearchNav from "@/components/search/SearchNav/SearchNav";
import StoreDoubleCard from "@/components/shared/Card/StoreDoubleCard";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import Sort from "@/components/shared/Sort/Sort";
import Tab from "@/components/shared/Tab/Tab";
import { IFilterStore } from "@/types/store/filter";
import * as S from "../search.styled";

function SearchResultStorePage() {
  const { currentSearch } = useSearchStore();
  const { selectedFilterOptions } = useFilterStore();
  const [searchResult, setSearchResult] = useState<IStoreListItem[]>([]);
  const [filterResult, setFilterResult] = useState<IStoreListItem[]>([]);
  const [data, setData] = useState<IStoreListItem[]>(searchResult || filterResult || []);

  useEffect(() => {
    const result = storeList.filter(store => store.name.includes(currentSearch));
    setSearchResult(result);
    setData(result);
  }, [currentSearch]);

  useEffect(() => {
    if (
      Object.keys(selectedFilterOptions).some(
        filter => selectedFilterOptions[filter as keyof IFilterStore].length !== 0,
      )
    ) {
      const result = searchResult.filter(store => {
        return selectedFilterOptions["카테고리"].map(category => {
          return store.category.includes(category);
        });
      });
      setFilterResult(result);
      setData(result);
    }
  }, [searchResult, selectedFilterOptions]);

  useEffect(() => {
    if (
      Object.keys(selectedFilterOptions).some(
        filter => selectedFilterOptions[filter as keyof IFilterStore].length !== 0,
      )
    ) {
      const result = searchResult.filter(store => {
        return selectedFilterOptions["카테고리"].some(category => {
          return store.category.includes(category);
        });
      });

      setFilterResult(result);
      setData(result);
    }
  }, [searchResult, selectedFilterOptions]);

  return (
    <S.Layout>
      <SearchNav mode="result" />
      <Tab menuList={resultTab} target="resultTab" />
      <Sort />
      <FilterBar />
      <S.StoreGrid>
        {data.map(store => (
          <StoreDoubleCard key={store.id} data={store} />
        ))}
      </S.StoreGrid>
      <FilterModal />
    </S.Layout>
  );
}

export default SearchResultStorePage;
