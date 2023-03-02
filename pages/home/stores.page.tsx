import React, { useState } from "react";
import { css, useTheme } from "@emotion/react";

import { storeList } from "@/mocks/mockData/storeList";
import { homeTab } from "@/constants/tabs";

import HomeHero from "@/components/home/HomeHero/HomeHero";
import Tab from "@/components/shared/Tab/Tab";
import Sort from "@/components/shared/Sort/Sort";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import StoreDoubleCard from "@/components/shared/Card/StoreDoubleCard";
import * as S from "./recommendation/recommendation.styled";

function HomeStoresPage() {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div>
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
        <button onClick={toggleModal}>필터링</button>
        <Sort />
        {storeList.map(store => (
          <StoreDoubleCard key={store.id} data={store} />
        ))}
      </S.ContentWrap>
      <FilterModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default HomeStoresPage;
