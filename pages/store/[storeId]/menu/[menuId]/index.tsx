import { menu } from "@/mocks/mockData/menu";
import MenuHero from "@/components/Store/MenuHero/MenuHero";
import Tab from "@/components/shared/Tab/Tab";
import { storeMenuTab } from "@/constants/navigations";
import { Caution, Size, Option, Flavor } from "@/assets/images/index";
import * as S from "@/ui/store/[storeId]/menu/[menuId]/menuItem.styled";

function MenuDetailsPage() {
  const { name, category, basePrice, menuImage, basicInfo } = menu;
  return (
    <S.Container>
      <MenuHero
        menuImage={menuImage}
        name={name}
        basePrice={basePrice}
        basicInfo={basicInfo}
        category={category}
      />
      <Tab menuList={storeMenuTab} type="swipeable" target="storeMenuTab" />
      <Size />
      <Flavor />
      <Option />
      <Caution />
    </S.Container>
  );
}

export default MenuDetailsPage;
