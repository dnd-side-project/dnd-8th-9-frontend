import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { useTheme } from "@emotion/react";
import Carousel from "@/components/shared/Carousel/Carousel";
import * as S from "./guide.styled";

const GUIDE_IMAGES = [
  {
    id: 1,
    url: "/guide1.svg",
  },
  {
    id: 2,
    url: "/guide2.svg",
  },
];

function GuidePage() {
  const { colors } = useTheme();

  return (
    <S.CarouselWrap>
      <Carousel images={GUIDE_IMAGES} />
      <Link href={ROUTES.HOME_RECOMMENDATION_PAGE}>
        <S.CloseButton label="close" type="button" shape="round">
          <S.CloseIcon name="close" size="l" color={colors.grey[600]} />
        </S.CloseButton>
      </Link>
    </S.CarouselWrap>
  );
}

export default GuidePage;
