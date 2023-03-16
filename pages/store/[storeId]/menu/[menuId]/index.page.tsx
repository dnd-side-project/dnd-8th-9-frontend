import Link from "next/link";
import { useRouter } from "next/router";

import { menu } from "@/mocks/mockData/menu";
import { reviews } from "@/mocks/mockData/review";
import { menuList } from "@/mocks/mockData/menuList";
import { storeMenuTab } from "@/constants/tabs";

import Tab from "@/components/shared/Tab/Tab";
import Button from "@/components/shared/Button/Button";
import Icon from "@/components/shared/Icon/Icon";
import { MenuHero, MenuSize, MenuTaste, MenuDesign, MenuCaution } from "@/components/store/menu";
import Review from "@/components/store/review/Review/Review";

import * as S from "./menuItem.styled";

const MENU_DATA = [
  {
    title: "사이즈",
    children: <MenuSize size={menu.detailInfo.size} />,
  },
  {
    title: "맛 선택",
    children: <MenuTaste taste={menu.detailInfo.taste} />,
  },
  {
    title: "모양변경",
    children: <MenuDesign design={menu.detailInfo.design} />,
  },
  {
    title: "주의사항",
    children: <MenuCaution caution={menu.detailInfo.caution} />,
  },
];

function MenuDetailsPage() {
  const {
    query: { menuId },
  } = useRouter();

  const { name, category, basePrice, menuImage, basicInfo } = menu;
  const { reviewList } = reviews;
  const targetMenu = menuList.menus.filter(menuItem => menuItem.id === Number(menuId));
  const menuName = targetMenu.length && targetMenu[0].name;
  const menuReviews = reviewList.filter(review => review.menuOption === menuName);

  return (
    <div>
      <MenuHero
        menuImage={menuImage}
        name={name}
        basePrice={basePrice}
        basicInfo={basicInfo}
        category={category}
      />
      <Tab menuList={storeMenuTab} type="swipeable" target="storeMenuTab" />
      {MENU_DATA.map(({ title, children }) => (
        <S.MenuContentBox key={title} title={title}>
          {children}
        </S.MenuContentBox>
      ))}
      <S.ReviewListWrap id="review">
        <h2>
          이 메뉴의 리뷰<strong>{menuReviews.length}</strong>
        </h2>
        {menuReviews?.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </S.ReviewListWrap>
    </div>
  );
}

export default MenuDetailsPage;
