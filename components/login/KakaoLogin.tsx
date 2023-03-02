/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
import useUserStore from "@/store/user";
import KakaoLoginButton from "react-kakao-login";
import Icon from "../shared/Icon/Icon";
import Text from "../shared/Text/Text";

function KakaoLogin() {
  const { loginUser, logoutUser } = useUserStore();

  const loginSuccessHandler = (res: any) => {
    const {
      response: { access_token },
      profile: {
        properties: { nickname, profile_image },
        kakao_account: { email },
      },
    } = res;

    localStorage.setItem("access_token", access_token as string);
    loginUser(nickname, profile_image, email);
  };

  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    logoutUser();
  };

  return (
    <KakaoLoginButton
      token={process.env.NEXT_PUBLIC_KAKAO_LOGIN_API_KEY as string}
      onSuccess={loginSuccessHandler}
      onFail={error => alert(error)}
      onLogout={logoutHandler}
      style={{
        backgroundColor: "#FEE500",
        borderRadius: "0.8rem",
        height: "4.8rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "1rem",
      }}
    >
      <>
        <Icon name="kakao" color="black" fill="black" />
        <Text weight={500} size={16} color="black">
          카카오로 시작하기
        </Text>
      </>
    </KakaoLoginButton>
  );
}

export default KakaoLogin;
