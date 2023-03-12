import Link from "next/link";
import useOnboardStore from "@/store/onboard";
import { ROUTES } from "@/constants/routes";
import Text from "@/components/shared/Text/Text";
import * as S from "./onboard.styled";

function ProfileOnboardEditPage() {
  const { location, cakeStyle } = useOnboardStore();

  return (
    <S.Wrap>
      <S.ContainerWrap>
        <S.TitleContainer>
          <S.TitleText as="h2">케이크 주문 시 선호 지역</S.TitleText>
          <Link href={ROUTES.MYPAGE_ONBOARD_LOCATION}>
            <Text>편집</Text>
          </Link>
        </S.TitleContainer>
        <S.TagContainer>
          {location.map(locationItem => (
            <S.TagItem type="single" label={locationItem} key={locationItem}>
              {locationItem}
            </S.TagItem>
          ))}
        </S.TagContainer>
        <S.TitleContainer>
          <S.TitleText as="h2">관심 있는 케이크 스타일</S.TitleText>
          <Link href={ROUTES.MYPAGE_ONBOARD_CATEGORY}>
            <Text>편집</Text>
          </Link>
        </S.TitleContainer>
        <S.TagContainer>
          {cakeStyle.map(cakeStyleItem => (
            <S.TagItem type="single" label={cakeStyleItem} key={cakeStyleItem}>
              {cakeStyleItem}
            </S.TagItem>
          ))}
        </S.TagContainer>
      </S.ContainerWrap>
    </S.Wrap>
  );
}

export default ProfileOnboardEditPage;
