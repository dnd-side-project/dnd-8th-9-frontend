import Image from "next/image";
import { useTheme } from "@emotion/react";
import { DangdoLogo, LogoIcon } from "@/assets/images";
import KakaoLogin from "@/components/login/KakaoLogin";
import Text from "@/components/shared/Text/Text";
import * as S from "./redirect.styled";

function LoginRedirectPage() {
  const { colors } = useTheme();

  return (
    <S.Wrap>
      <S.LogoWrap>
        <LogoIcon />
        <DangdoLogo />
      </S.LogoWrap>
      <S.TextWrap>
        <Text size={16} weight={600} color={colors.grey[100]}>
          당도에 로그인해서 <br />
          빠르고 쉬운 주문제작 케이크 탐색을 시작해보세요
        </Text>
      </S.TextWrap>
      <KakaoLogin />
      <S.ImageWrap>
        <Image src="/loginCake.svg" alt="3d cake" fill />
      </S.ImageWrap>
    </S.Wrap>
  );
}

export default LoginRedirectPage;
