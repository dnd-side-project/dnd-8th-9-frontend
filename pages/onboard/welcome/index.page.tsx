import Link from "next/link";
import { useTheme } from "@emotion/react";
import { OnboardCake } from "@/assets/images";
import { ROUTES } from "@/constants/routes";
import { useGetUser } from "@/hooks/queries/user";
import Button from "@/components/shared/Button/Button";
import Text from "@/components/shared/Text/Text";
import * as S from "./welcome.styled";

function WelcomePage() {
  const { colors } = useTheme();
  const { data: userData } = useGetUser();

  return (
    <S.Wrap>
      <S.TextContainer>
        <Text as="h1" weight={700} size={26} color={colors.grey[800]}>
          {userData?.data.nickname}님, <br />
          가입을 축하드려요
        </Text>
        <Text as="p" weight={400} size={15} color={colors.grey[800]}>
          간단한 맞춤정보를 저장하면 <br /> 딱 맞는 케이크 추천을 해드릴게요!
        </Text>
      </S.TextContainer>
      <S.ImageContainer>
        <OnboardCake />
      </S.ImageContainer>
      <S.ButtonContainer>
        <Link href={ROUTES.ONBOARDING_LOCATION_PAGE}>
          <Button shape="square" label="onboard link" type="button">
            맞춤 정보 저장하러 가기
          </Button>
        </Link>
        <Link href={ROUTES.HOME_RECOMMENDATION_PAGE}>
          <Button shape="square" label="skip" type="button">
            안 할래요
          </Button>
        </Link>
      </S.ButtonContainer>
    </S.Wrap>
  );
}

export default WelcomePage;
