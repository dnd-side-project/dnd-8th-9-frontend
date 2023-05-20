import { menuList } from "@/mocks/mockData/menuList";
import useReviewStore from "@/store/review";
import { IStoreMenuListItem } from "@/types/api";
import MenuCard from "@/components/shared/MenuCard/MenuCard";
import * as S from "./SelectMenu.styed";

export default function SelectMenu() {
  const { updateReviewState, reviewState } = useReviewStore();

  const handleClick = (menu: IStoreMenuListItem) => {
    const { id, storeId, storeName, menuImages, name } = menu;
    updateReviewState("menuId", id);
    updateReviewState("menuName", name);
    updateReviewState("menuImage", menuImages[0].url);
    updateReviewState("storeId", storeId);
    updateReviewState("storeName", storeName);
  };

  return (
    <S.Container>
      <S.FormTitle>주문하신 메뉴는 무엇인가요?</S.FormTitle>
      {menuList.map(menu => (
        <S.MenuCardClick
          key={menu.id}
          onClick={() => handleClick(menu)}
          className={reviewState.menuId === menu.id ? "isActive" : "isNotActive"}
        >
          <MenuCard menu={menu} />
        </S.MenuCardClick>
      ))}
    </S.Container>
  );
}
