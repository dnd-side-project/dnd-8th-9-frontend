/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import { resultTab } from "@/constants/tabs";
import { useGetStoreList } from "@/hooks/queries/store";
import SearchNav from "@/components/search/SearchNav/SearchNav";
import StoreDoubleCard from "@/components/shared/Card/StoreDoubleCard";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import Sort from "@/components/shared/Sort/Sort";
import Tab from "@/components/shared/Tab/Tab";
import NoResult from "@/components/search/NoResult/NoResult";
import * as S from "../search.styled";

function SearchResultStorePage() {
  const {
    query: { key },
  } = useRouter();
  const { data: storesData, refetch } = useGetStoreList({ search: key as string });

  useEffect(() => {
    refetch();
  }, [key]);

  return (
    <S.Layout>
      <SearchNav mode="store" />
      {!storesData?.data.length ? (
        <NoResult currentSearch={key as string} />
      ) : (
        <>
          <Tab menuList={resultTab} target="resultTab" />
          <Sort />
          <FilterBar />
          {storesData?.data.map(store => (
            <StoreDoubleCard key={store.id} data={store} />
          ))}
          <FilterModal />
        </>
      )}
    </S.Layout>
  );
}

export default SearchResultStorePage;
