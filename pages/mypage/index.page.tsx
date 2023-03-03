import Link from "next/link";
import { useTheme } from "@emotion/react";
import { User } from "@/assets/icons";
import { ROUTES } from "@/constants/routes";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
import * as S from "./mypage.styled";

const PROFILE_MENU = [
  {
    name: "리뷰관리",
    url: ROUTES.MYPAGE_REVIEW,
  },
  {
    name: "환경설정",
    url: ROUTES.MYPAGE_SETTINGS,
  },
  {
    name: "공지사항",
    url: ROUTES.MYPAGE_NOTICE,
  },
];

function ProfilePage() {
  const handleLogout = () => {
    // 로그아웃 모달창
  };
  const { colors } = useTheme();

  return (
    <div>
      <S.Header>
        <S.UserInfo>
          <User className="icon" width="60" height="60" />
          <div>
            <Text size={18} weight={700} color={colors.grey[800]}>
              닉네임
            </Text>
            <Text size={13} weight={500} color={colors.grey[900]}>
              @SNS 계정
            </Text>
          </div>
          <Link href={ROUTES.MYPAGE_PROFILE}>
            <Text size={12} weight={500} color={colors.grey[700]}>
              프로필 수정
            </Text>
          </Link>
        </S.UserInfo>
        <S.EditLink href={ROUTES.MYPAGE_ONBOARD}>
          <Text size={15} weight={500} color={colors.grey[100]}>
            맞춤정보 수정
          </Text>
          <div>
            <Text size={15} weight={500} color={colors.grey[500]}>
              지역, 스타일
            </Text>
            <Icon name="arrowRight" color={colors.grey[100]} size="m" />
          </div>
        </S.EditLink>
      </S.Header>
      <S.LinkWrap>
        {PROFILE_MENU.map(menu => (
          <Link href={menu.url} key={menu.name}>
            <Text weight={500} size={16} color={colors.grey[900]}>
              {menu.name}
            </Text>
            <Icon name="arrowRight" color={colors.grey[600]} />
          </Link>
        ))}
      </S.LinkWrap>
      <S.LogoutButton type="button" label="logout" shape="square" onClick={handleLogout}>
        <Icon name="logout" size="l" color={colors.blue[400]} />
        <Text size={16} weight={500} color={colors.grey[900]}>
          로그아웃
        </Text>
      </S.LogoutButton>
    </div>
  );
}

export default ProfilePage;
