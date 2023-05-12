import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { ROUTES } from "@/constants/routes";
import { RightFullArrow } from "@/assets/icons";
import Text from "@/components/shared/Text/Text";
import * as S from "./WelcomeCard.styled";

function WelcomeCard() {
  const { colors } = useTheme();

  return (
    <S.Wrap>
      <S.TextContainer>
        <Text as="h1" size={26} weight={700} color={colors.grey[100]}>
          당도에 오신걸 환영해요!
        </Text>
        <Text as="p" size={16} weight={500} color={colors.grey[300]}>
          당도와 함께 특별한 주문제작 케이크를 탐색하는 방법을 알아볼까요?
        </Text>
      </S.TextContainer>
      <S.ImageContainer>
        <Image src="/mainCake.svg" alt="cake" fill />
      </S.ImageContainer>
      <S.LinkContainer>
        <Link href={ROUTES.ONBOARDING_GUIDE_PAGE}>
          <Text size={16} weight={500} color={colors.grey[800]}>
            당도 탐색 방법 보러가기
          </Text>
          <RightFullArrow />
        </Link>
      </S.LinkContainer>
    </S.Wrap>
  );
}

export default WelcomeCard;
