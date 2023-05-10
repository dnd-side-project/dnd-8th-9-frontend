import { LOGIN_REDIRECT_URI } from "@/constants/api";
import Icon from "../shared/Icon/Icon";
import Text from "../shared/Text/Text";
import * as S from "./KakoLogin.styled";

function KakaoLogin() {
  return (
    <S.LoginLink href={LOGIN_REDIRECT_URI}>
      <Icon name="kakao" color="black" fill="black" />
      <Text weight={500} size={16} color="black">
        카카오로 시작하기
      </Text>
    </S.LoginLink>
  );
}

export default KakaoLogin;
