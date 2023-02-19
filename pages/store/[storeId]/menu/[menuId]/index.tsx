import React from "react";
import { menu } from "@/mocks/mockData/menu";
import MenuHero from "@/components/Store/MenuHero/MenuHero";
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
    </S.Container>
  );
}

export default MenuDetailsPage;
