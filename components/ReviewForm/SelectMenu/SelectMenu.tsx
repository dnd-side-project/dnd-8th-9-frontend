/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from "react";
import { useFormMenuStore, useButtonDisabledStore } from "@/store/ReviewForm";
import MenuCard from "@/components/shared/MenuCard/MenuCard";
import { menuList } from "@/mocks/mockData/menuList";
import * as S from "./SelectMenu.styed";

export default function SelectMenu() {
  const [isClicked, setIsClicked] = useState(0);
  const { setMenu } = useFormMenuStore(state => state);
  const { setButtonDisabled, setButtonAbled } = useButtonDisabledStore(state => state);

  useEffect(() => {
    setButtonDisabled();
  }, [setButtonAbled, setButtonDisabled]);

  return (
    <S.Container>
      <S.FormTitle>주문하신 메뉴는 무엇인가요?</S.FormTitle>
      {menuList.menus.map(menu => (
        <S.MenuCardClick
          key={menu.id}
          onClick={() => {
            setIsClicked(menu.id);
            setMenu(menu);
            setButtonAbled();
          }}
          className={isClicked === menu.id ? "isActive" : "isNotActive"}
        >
          <MenuCard menu={menu} />
        </S.MenuCardClick>
      ))}
    </S.Container>
  );
}
