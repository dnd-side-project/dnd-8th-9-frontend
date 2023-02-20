import { useRouter } from "next/router";
import { reviews } from "@/mocks/mockData/review";
import { menuList } from "@/mocks/mockData/menuList";
import Review from "@/components/store/review/Review/Review";
import * as S from "./menuItem.styled";

function MenuReviewsPage() {
  const {
    query: { menuId },
  } = useRouter();

  const { reviewList } = reviews;
  const targetMenu = menuList.menus.filter(menuItem => menuItem.id === Number(menuId));
  const menuName = targetMenu.length && targetMenu[0].name;

  const menuReviews = reviewList.filter(review => review.menuOption === menuName);

  return (
    <S.Container>
      <S.ReviewListWrap>
        <h2>
          이 메뉴의 리뷰 <strong>{menuReviews.length}</strong>
        </h2>
        {menuReviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </S.ReviewListWrap>
    </S.Container>
  );
}

export default MenuReviewsPage;
