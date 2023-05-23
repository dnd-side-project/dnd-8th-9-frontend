/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import { resultTab } from "@/constants/tabs";
import { useGetMenuList } from "@/hooks/queries/menu";
import NoResult from "@/components/search/NoResult/NoResult";
import SearchNav from "@/components/search/SearchNav/SearchNav";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import Sort from "@/components/shared/Sort/Sort";
import Tab from "@/components/shared/Tab/Tab";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
import * as S from "../search.styled";

function SearchResultMenuPage() {
  const {
    query: { key },
  } = useRouter();
  const { data: menusData, refetch } = useGetMenuList({ search: key as string });

  useEffect(() => {
    refetch();
  }, [key]);

  return (
    <S.Layout>
      <SearchNav mode="menu" />
      {!menusData?.data.length ? (
        <NoResult currentSearch={key as string} />
      ) : (
        <>
          <Tab menuList={resultTab} target="resultTab" />
          <Sort />
          <FilterBar />
          <S.MenuGrid>
            {menusData?.data.map(menu => (
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
