/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import MenuCard from "@/components/shared/MenuCard/MenuCard";
import { menuList } from "@/mocks/mockData/menuList";
import * as S from "./SelectMenu.styed";

interface ISelectMenu {
  formData: {
    id: number;
    name: string;
    menuImage: string;
    size: string;
    dando: number;
    like: string;
    text: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      menuImage: string;
      size: string;
      dando: number;
      like: string;
      text: string;
    }>
  >;
}

interface IMenu {
  id: number;
  name: string;
  menuImage: string;
  summary: string;
  price: number;
}

export default function SelectMenu({ formData, setFormData }: ISelectMenu) {
  const handleSelectMenu = (menu: IMenu) => {
    setFormData({ ...formData, id: menu.id, name: menu.name, menuImage: menu.menuImage });
  };

  return (
    <S.Container>
      <S.FormTitle>주문하신 메뉴는 무엇인가요?</S.FormTitle>
      {menuList.menus.map(menu => (
        // TODO: MenuCard 클릭 시 색상 변경
        <S.MenuCardClick key={menu.id} onClick={() => handleSelectMenu(menu)}>
          <MenuCard menu={menu} />
        </S.MenuCardClick>
      ))}
    </S.Container>
  );
}
