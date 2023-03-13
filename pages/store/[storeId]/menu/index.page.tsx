import Link from "next/link";
import { useRouter } from "next/router";
import { store } from "@/mocks/mockData/store";
import { menuList } from "@/mocks/mockData/menuList";
import { useGetStore } from "@/api/queries/store";
import MenuCard from "@/components/shared/MenuCard/MenuCard";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import * as S from "./menu.styled";

const MENU_PAGE = "menuPage";

function MenuPage() {
  // const { data, isLoading, isError } = useGetStore({ storeId: 1 });
  const { asPath } = useRouter();
  const { name, category, location, priceRange, canDelivery, canPickup } = store;

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error...</div>;

  return (
    <SectionLayout>
      <S.ListWrap>
        {menuList.menus.map(menu => (
          <Link key={menu.id} href={`${asPath}/${menu.id}`}>
            <MenuCard menu={menu} option={MENU_PAGE} />
          </Link>
        ))}
      </S.ListWrap>
    </SectionLayout>
  );
}

export default MenuPage;
