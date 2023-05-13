import Image from "next/image";
import { useTheme } from "@emotion/react";
import { LogoIcon } from "@/assets/images";
import KakaoLogin from "@/components/login/KakaoLogin";
import Text from "@/components/shared/Text/Text";
import * as S from "./login.styled";

function LoginRedirectPage() {
  const { colors } = useTheme();

  return (
    <S.Wrap>
      <S.Content>
        <S.LogoWrap>
          <LogoIcon />
          <S.LogoImageWrap>
            <Image src="/logoText.svg" alt="logo" fill />
          </S.LogoImageWrap>
        </S.LogoWrap>
        <S.MiddleWrap>
          <S.TextWrap>
            <Text size={16} weight={500} color={colors.grey[100]}>
              당도에 로그인해서 <br />
              빠르고 쉬운 주문제작 케이크 탐색을 시작해보세요
            </Text>
          </S.TextWrap>
          <KakaoLogin />
        </S.MiddleWrap>
        <S.ImageWrap>
          <Image src="/mainCake.svg" alt="3d cake" fill />
        </S.ImageWrap>
      </S.Content>
    </S.Wrap>
  );
}

export default LoginRedirectPage;
