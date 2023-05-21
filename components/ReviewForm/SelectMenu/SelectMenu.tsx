/* eslint-disable @typescript-eslint/no-shadow */
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import useReviewStore from "@/store/review";
import { IStoreMenuListItem } from "@/types/api";
import { useGetStore, useGetStoreMenus } from "@/hooks/queries/store";
import Icon from "@/components/shared/Icon/Icon";
import MenuSingleCard from "@/components/shared/Card/MenuSingleCard";
import * as S from "./SelectMenu.styed";

export default function SelectMenu() {
  const { colors } = useTheme();
  const {
    query: { storeId },
  } = useRouter();

  const { updateReviewState, reviewState } = useReviewStore();
  const { data: storeDetailsData } = useGetStore(Number(storeId));
  const { data: storeMenusData } = useGetStoreMenus(Number(storeId));

  const handleClick = (menu: IStoreMenuListItem) => {
    const { id, storeId, storeName, menuImages, name } = menu;
    updateReviewState("menuId", id);
    updateReviewState("menuName", name);
    updateReviewState("menuImage", menuImages[0].url);
    updateReviewState("storeId", storeId);
    updateReviewState("storeName", storeName);
  };

  return (
    <div>
      <S.FormTitle as="h1" size={18} weight={600}>
        {storeDetailsData?.data.name}에서 <br /> 주문하신 메뉴를 선택해주세요.
      </S.FormTitle>
      <S.MenuList>
        {storeMenusData?.data.map(menu => (
          <S.MenuCardContainer
            key={menu.id}
            onClick={() => handleClick(menu)}
            className={reviewState.menuId === menu.id ? "isActive" : "isNotActive"}
          >
            <S.IconWrap>
              <Icon
                name="check"
                size="s"
                color={reviewState.menuId === menu.id ? colors.grey[100] : colors.grey[500]}
              />
            </S.IconWrap>
            <MenuSingleCard mode="none" size="s" data={menu} />
          </S.MenuCardContainer>
        ))}
      </S.MenuList>
    </div>
  );
}
