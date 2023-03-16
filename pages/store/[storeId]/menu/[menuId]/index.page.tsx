import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";

import { menu } from "@/mocks/mockData/menu";
import { reviews } from "@/mocks/mockData/review";
import { menuList } from "@/mocks/mockData/menuList";
import { storeMenuTab } from "@/constants/tabs";

import Tab from "@/components/shared/Tab/Tab";
import { MenuHero, MenuSize, MenuTaste, MenuDesign, MenuCaution } from "@/components/store/menu";
import Review from "@/components/store/review/Review/Review";
import Sort from "@/components/shared/Sort/Sort";
import ReviewFilter from "@/components/ReviewFilter/ReviewFilter";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
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
  const { colors } = useTheme();
  const {
    query: { menuId },
    asPath,
  } = useRouter();

  const { name, category, basePrice, menuImage, basicInfo, detailInfo } = menu;
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
        <S.ReviewHeader>
          <S.ReviewTitle as="p" size={16} weight={600}>
            이 메뉴의 리뷰 <strong>{menuReviews.length}</strong>건
          </S.ReviewTitle>
          <S.ReviewWriteButton type="button" label="write review" shape="square">
            <Icon name="pencil" size="s" color={colors.grey[800]} />
            <Text weight={500} color={colors.grey[800]}>
              리뷰작성
            </Text>
          </S.ReviewWriteButton>
        </S.ReviewHeader>
        <ReviewFilter />
        <Sort />
        <div>
          {menuReviews?.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </S.ReviewListWrap>
    </div>
  );
}

export default MenuDetailsPage;
