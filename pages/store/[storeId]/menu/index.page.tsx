import Link from "next/link";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import storeApi from "@/api/domains/store";
import { useGetStoreMenus } from "@/hooks/queries/store";
import { storeQueryKey } from "@/constants/queryKey";
import MenuSingleCard from "@/components/shared/Card/MenuSingleCard";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import * as S from "./menu.styled";

function MenuPage() {
  const {
    query: { storeId },
  } = useRouter();

  const { data: storeMenusData, isLoading, isError } = useGetStoreMenus(Number(storeId));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <SectionLayout>
      <S.ListWrap>
        {storeMenusData.data.map(menu => (
          <Link href={`/store/${menu.storeId}/menu/${menu.id}`} key={menu.id}>
            <S.CardWrapper>
              <MenuSingleCard data={menu} />
            </S.CardWrapper>
          </Link>
        ))}
      </S.ListWrap>
    </SectionLayout>
  );
}

export default MenuPage;

export async function getServerSideProps({ params: { storeId } }: { params: { storeId: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(storeQueryKey.menus(Number(storeId)), () =>
    storeApi.getStoreMenus(Number(storeId)),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
