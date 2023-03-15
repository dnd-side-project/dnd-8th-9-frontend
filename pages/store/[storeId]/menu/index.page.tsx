import Link from "next/link";
import { useRouter } from "next/router";
import { randomMenus } from "@/mocks/mockData/randomMenuList";
import { useGetStore } from "@/api/queries/store";
import MenuSingleCard from "@/components/shared/Card/MenuSingleCard";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import * as S from "./menu.styled";

function MenuPage() {
  // const { data, isLoading, isError } = useGetStore({ storeId: 1 });
  const { asPath } = useRouter();

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error...</div>;

  return (
    <SectionLayout>
      <S.ListWrap>
        {randomMenus.menus.map(menu => (
          <Link key={menu.id} href={`${asPath}/${menu.id}`}>
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
