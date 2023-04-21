import { storeList } from "@/mocks/mockData/storeList";
import { homeTab } from "@/constants/tabs";

import HomeHero from "@/components/home/HomeHero/HomeHero";
import Tab from "@/components/shared/Tab/Tab";
import Sort from "@/components/shared/Sort/Sort";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import StoreDoubleCard from "@/components/shared/Card/StoreDoubleCard";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import * as S from "./recommendation/recommendation.styled";

function HomeStoresPage() {
  return (
    <div>
      <HomeHero />
      <Tab menuList={homeTab} target="homeTab" />
      <S.ContentWrap>
        <FilterBar />
        <Sort />
        {storeList.map(store => (
          <StoreDoubleCard key={store.id} data={store} />
        ))}
      </S.ContentWrap>
      <FilterModal />
    </div>
  );
}

export default HomeStoresPage;
