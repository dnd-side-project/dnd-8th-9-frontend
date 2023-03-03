import { useRouter } from "next/router";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { ROUTES } from "@/constants/routes";
import { DangdoLogo } from "@/assets/images";
import KakaoLogin from "@/components/login/KakaoLogin";
import Text from "@/components/shared/Text/Text";
import * as S from "./login.styled";

function LoginPage() {
  const { colors } = useTheme();
  const { push } = useRouter();

  const loginLater = () => {
    push(ROUTES.HOME_RECOMMENDATION_PAGE);
  };

  return (
    <S.LoginWrap>
      <S.LogoWrap>
        <DangdoLogo />
        <Text size={14} weight={500} color={colors.grey[100]}>
          주문제작 케이크 탐색을 쉽고 빠르게
        </Text>
      </S.LogoWrap>
      <S.ImageWrap>
        <Image src="/loginCake.svg" alt="3d cake" fill />
      </S.ImageWrap>
      <S.ButtonWrap>
        <KakaoLogin />
        <S.LaterButton label="login later" type="button" shape="square" onClick={loginLater}>
          로그인 없이 둘러보기
        </S.LaterButton>
      </S.ButtonWrap>
    </S.LoginWrap>
  );
}

export default LoginPage;
