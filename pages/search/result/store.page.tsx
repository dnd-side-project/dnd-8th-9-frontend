import { useEffect, useState } from "react";
import { resultTab } from "@/constants/tabs";
import { IStoreItem } from "@/api/types/storeList";
import { TCategory } from "@/api/types/shared";
import { storeList } from "@/mocks/mockData/storeList";
import useSearchStore from "@/store/search";
import useFilterStore from "@/store/filter";

import SearchNav from "@/components/search/SearchNav/SearchNav";
import StoreDoubleCard from "@/components/shared/Card/StoreDoubleCard";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import Sort from "@/components/shared/Sort/Sort";
import Tab from "@/components/shared/Tab/Tab";
import * as S from "../search.styled";

function SearchResultStorePage() {
  const { currentSearch } = useSearchStore();
  const { selectedFilterOptions } = useFilterStore();
  const [searchResult, setSearchResult] = useState<IStoreItem[]>([]);
  const [filterResult, setFilterResult] = useState<IStoreItem[]>([]);
  const [data, setData] = useState<IStoreItem[]>(searchResult || filterResult || []);

  useEffect(() => {
    const result = storeList.filter(store => store.name.includes(currentSearch));
    setSearchResult(result);
    setData(result);
  }, [currentSearch]);

  useEffect(() => {
    if (
      Object.keys(selectedFilterOptions).some(filter => selectedFilterOptions[filter].length !== 0)
    ) {
      const result = searchResult.filter(store => {
        return selectedFilterOptions["카테고리"].map(category => {
          return store.category.includes(category as TCategory);
        });
      });
      setFilterResult(result);
      setData(result);
    }
  }, [searchResult, selectedFilterOptions]);

  useEffect(() => {
    if (
      Object.keys(selectedFilterOptions).some(filter => selectedFilterOptions[filter].length !== 0)
    ) {
      const result = searchResult.filter(store => {
        return selectedFilterOptions["카테고리"].some(category => {
          return store.category.includes(category as TCategory);
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
