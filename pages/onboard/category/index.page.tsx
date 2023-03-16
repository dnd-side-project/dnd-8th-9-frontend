import Link from "next/link";
import { useTheme } from "@emotion/react";
import useModalStore from "@/store/modal";
import useOnboardStore from "@/store/onboard";
import useUserStore from "@/store/user";
import { ROUTES } from "@/constants/routes";
import Category from "@/components/onboard/Category/Category";
import Text from "@/components/shared/Text/Text";
import * as S from "./category.styled";

function OnboardCategoryPage() {
  const { colors } = useTheme();
  const { cakeStyle } = useOnboardStore();
  const { toggleWelcomeModal } = useModalStore();
  const { toggleDoneOnboard } = useUserStore();

  const finishOnboard = () => {
    toggleWelcomeModal();
    toggleDoneOnboard();
  };

  return (
    <S.Wrap>
      <S.Navbar>
        <Link href={ROUTES.HOME_RECOMMENDATION_PAGE}>
          <Text size={13} weight={500} color={colors.grey[700]}>
            건너뛰기
          </Text>
        </Link>
      </S.Navbar>
      <S.TextContainer>
        <Text as="h1" size={20} weight={700}>
          관심있는 <br />
          케이크 스타일을 선택해주세요!
        </Text>
        <Text as="small" size={12} weight={500} color={colors.grey[700]}>
          복수선택이 가능해요.
        </Text>
      </S.TextContainer>
      <Category />
      <S.Footer>
        <Link href={ROUTES.ONBOARDING_LOCATION_PAGE}>
          <S.PrevButton type="button" label="next" shape="square">
            이전
          </S.PrevButton>
        </Link>
        <Link href={ROUTES.HOME_RECOMMENDATION_PAGE}>
          <S.SaveButton
            disabled={!cakeStyle.length}
            onClick={finishOnboard}
            type="button"
            label="next"
            shape="square"
          >
            저장
          </S.SaveButton>
        </Link>
      </S.Footer>
    </S.Wrap>
  );
}

export default OnboardCategoryPage;
