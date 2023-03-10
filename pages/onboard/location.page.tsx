/* eslint-disable react/no-array-index-key */
import Link from "next/link";
import { useTheme } from "@emotion/react";
import useOnboardStore from "@/store/onboard";
import { ROUTES } from "@/constants/routes";
import { locations } from "@/mocks/mockData/location";
import Button from "@/components/shared/Button/Button";
import Text from "@/components/shared/Text/Text";
import * as S from "./location.styled";

function OnboardLocationPage() {
  const { colors } = useTheme();
  const { location, setLocation } = useOnboardStore();

  const handleClick = (newLocation: string) => {
    setLocation(newLocation);
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
        <S.TextTag type="single" label="서울지역 한정">
          서울지역 한정
        </S.TextTag>
        <Text as="h1" size={20} weight={700} color={colors.grey[900]}>
          케이크 주문 시 <br />
          선호하는 지역을 선택해주세요!
        </Text>
        <Text as="small" size={12} weight={500} color={colors.grey[700]}>
          선택한 지역(최대 2개)을 중심으로 스토어를 추천드려요.
        </Text>
      </S.TextContainer>
      <S.LocationContainer>
        {locations.map(locationItem => (
          <button
            key={locationItem.id}
            className={location.includes(locationItem.name) ? "isSelected" : ""}
            onClick={() => handleClick(locationItem.name)}
          >
            <Text weight={500} size={15}>
              {locationItem.name}
            </Text>
            <Text weight={500} size={12}>{`(${locationItem.storeCounts}개)`}</Text>
            {locationItem.label && (
              <S.LabelTag type="single" label={locationItem.label}>
                {locationItem.label}
              </S.LabelTag>
            )}
          </button>
        ))}
      </S.LocationContainer>
      <S.Footer>
        <Link href={ROUTES.ONBOARDING_CATEGORY_PAGE}>
          <Button disabled={!location.length} type="button" label="next" shape="square">
            다음
          </Button>
        </Link>
      </S.Footer>
    </S.Wrap>
  );
}

export default OnboardLocationPage;
