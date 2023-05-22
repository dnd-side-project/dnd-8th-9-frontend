import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import useReviewStore from "@/store/review";
import { TReviewOption } from "@/types/api";
import Text from "@/components/shared/Text/Text";
import Dangdo from "@/components/shared/Dangdo/Dangdo";
import ReviewTag from "@/components/shared/Tag/common/ReviewTag";
import * as S from "./done.styled";

export default function Sumbitted() {
  const { colors } = useTheme();
  const router = useRouter();

  const { reviewState, clearReviewState } = useReviewStore();
  const { menuImage, menuName, sizeOption, goodPoint, dangdo, menuId } = reviewState;

  useEffect(() => {
    if (!menuId) {
      router.push("/home/recommendation");
    }
  }, [menuId, router]);

  const redirectToHome = () => {
    clearReviewState();
    router.push("/home/recommendation");
  };

  const redirectToReviews = () => {
    clearReviewState();
    const { storeId } = router.query;
    if (!storeId) {
      redirectToHome();
    }

    router.push(`/store/${storeId as string}/review`);
  };

  return (
    <S.Container>
      <S.IconWrap>
        <Image src="/congradulation.svg" alt="congradulation" fill />
        <S.CakeInfo>
          <S.ImageWrap>
            <Image src={menuImage} alt="menu" fill />
          </S.ImageWrap>
          <Text size={16} weight={500} color={colors.grey[800]}>
            {menuName}
          </Text>
          <Text size={13} weight={500} color={colors.grey[700]}>
            사이즈: {sizeOption}
          </Text>
          <S.ReviewWrap>
            <Dangdo dangdo={dangdo} size="m" />
            <ReviewTag goodPoint={goodPoint as TReviewOption} />
          </S.ReviewWrap>
        </S.CakeInfo>
      </S.IconWrap>
      <S.TextContent>
        <Text as="h1" weight={700} size={20}>
          리뷰작성 완료!
        </Text>
        <Text as="p" color={colors.grey[700]}>
          작성해주신 리뷰는 다른 구매자들의 선택에 많은 도움이 될 거에요 :)
        </Text>
      </S.TextContent>
      <S.ButtonWrap>
        <S.ReviewButton type="button" shape="square" label="review" onClick={redirectToReviews}>
          작성한 리뷰 보러가기
        </S.ReviewButton>
        <S.HomeButton type="button" shape="square" label="home" onClick={redirectToHome}>
          홈으로 가기
        </S.HomeButton>
      </S.ButtonWrap>
    </S.Container>
  );
}
