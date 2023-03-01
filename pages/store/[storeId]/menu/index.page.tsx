import Link from "next/link";
import { useRouter } from "next/router";
import { useGetStore } from "@/api/queries/store";
import MenuCard from "@/components/shared/MenuCard/MenuCard";
import Tab from "@/components/shared/Tab/Tab";
import StoreHero from "@/components/store/StoreHero/StoreHero";
import { storeTab } from "@/constants/tabs";

import { menuList } from "@/mocks/mockData/menuList";
import * as S from "./menu.styled";

const MENU_PAGE = "menuPage";

function MenuPage() {
  const { data, isLoading, isError } = useGetStore({ storeId: 1 });
  const { asPath } = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <StoreHero />
      <Tab type="swipeable" menuList={storeTab} target="storeTab" />
      <S.ListWrap>
        {menuList.menus.map(menu => (
          <Link key={menu.id} href={`${asPath}/${menu.id}`}>
            <MenuCard menu={menu} option={MENU_PAGE} />
          </Link>
        ))}
      </S.ListWrap>
    </div>
  );
}

export default MenuPage;
