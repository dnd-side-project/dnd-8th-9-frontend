import Link from "next/link";
import { useRouter } from "next/router";

import { menu } from "@/mocks/mockData/menu";
import { reviews } from "@/mocks/mockData/review";
import { menuList } from "@/mocks/mockData/menuList";
import { storeMenuTab } from "@/constants/navigations";

import Tab from "@/components/shared/Tab/Tab";
import Button from "@/components/shared/Button/Button";
import Icon from "@/components/shared/Icon/Icon";
import MenuHero from "@/components/store/menu/MenuHero/MenuHero";
import Review from "@/components/store/review/Review/Review";
import MenuSize from "@/components/store/menu/MenuSize/MenuSize";
import MenuTaste from "@/components/store/menu/MenuTaste/MenuTaste";
import MenuDesign from "@/components/store/menu/MenuDesign/MenuDesign";
import MenuCaution from "@/components/store/menu/MenuCaution/MenuCaution";

import * as S from "./menuItem.styled";

function MenuDetailsPage() {
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
    <S.Container>
      <MenuHero
        menuImage={menuImage}
        name={name}
        basePrice={basePrice}
        basicInfo={basicInfo}
        category={category}
      />
      <Tab menuList={storeMenuTab} type="swipeable" target="storeMenuTab" />
      <MenuSize size={detailInfo.size} />
      <MenuTaste taste={detailInfo.taste} />
      <MenuDesign design={detailInfo.design} />
      <MenuCaution caution={detailInfo.caution} />
      <S.ReviewListWrap>
        <h2>
          이 메뉴의 리뷰<strong>{menuReviews.length}</strong>
        </h2>
        {menuReviews?.slice(0, 2).map(review => (
          <Review key={review.id} review={review} />
        ))}
        <Link href={`${asPath}/all`}>
          <Button type="button" label="more reviews" shape="square" cssProp={S.buttonCss}>
            <>
              리뷰 전체보기
              <Icon name="arrowRight" size="m" />
            </>
          </Button>
        </Link>
      </S.ReviewListWrap>
    </S.Container>
  );
}

export default MenuDetailsPage;
