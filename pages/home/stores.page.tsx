import { QueryClient, dehydrate } from "@tanstack/react-query";
import { useGetStoreList } from "@/hooks/queries/store";
import storeApi from "@/api/domains/store";
import { storeQueryKey } from "@/constants/queryKey";
import { homeTab } from "@/constants/tabs";

import HomeHero from "@/components/home/HomeHero/HomeHero";
import Tab from "@/components/shared/Tab/Tab";
import Sort from "@/components/shared/Sort/Sort";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import StoreDoubleCard from "@/components/shared/Card/StoreDoubleCard";
import FilterBar from "@/components/shared/FilterBar/FilterBar";

import * as S from "./recommendation/recommendation.styled";

function HomeStoresPage() {
  const { data: storeListData } = useGetStoreList();

  return (
    <div>
      <HomeHero />
      <Tab menuList={homeTab} target="homeTab" />
      <S.ContentWrap>
        <FilterBar />
        <Sort />
        {storeListData?.data?.map(store => (
          <StoreDoubleCard key={store.id} data={store} />
        ))}
      </S.ContentWrap>
      <FilterModal />
    </div>
  );
}

export default HomeStoresPage;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(storeQueryKey.list, () => storeApi.getStoreList());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
