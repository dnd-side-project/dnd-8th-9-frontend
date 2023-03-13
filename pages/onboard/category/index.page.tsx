import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import useOnboardStore from "@/store/onboard";
import { cakeStyles } from "@/mocks/mockData/category";
import { ROUTES } from "@/constants/routes";
import Text from "@/components/shared/Text/Text";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./category.styled";

function OnboardCategoryPage() {
  const { colors } = useTheme();
  const { cakeStyle, setCakeStyle } = useOnboardStore();

  const handleClick = (cakeStyleItem: string) => {
    setCakeStyle(cakeStyleItem);
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
      <S.StyleContainer>
        {cakeStyles.map(style => (
          <S.StyleItem
            key={style.id}
            className={cakeStyle.includes(style.name) ? "isSelected" : ""}
            onClick={() => handleClick(style.name)}
          >
            <S.ImageWrap>
              <Image src={style.imageUrl} alt={style.name} fill />
              <div className="checkbox">
                <Icon
                  name="check"
                  size="m"
                  color={cakeStyle.includes(style.name) ? colors.grey[100] : colors.grey[500]}
                />
              </div>
            </S.ImageWrap>
            <Text size={14} weight={500}>
              {style.name}
            </Text>
          </S.StyleItem>
        ))}
      </S.StyleContainer>
      <S.Footer>
        <Link href={ROUTES.ONBOARDING_LOCATION_PAGE}>
          <S.PrevButton type="button" label="next" shape="square">
            이전
          </S.PrevButton>
        </Link>
        <Link href={ROUTES.HOME_RECOMMENDATION_PAGE}>
          <S.SaveButton disabled={!cakeStyle.length} type="button" label="next" shape="square">
            저장
          </S.SaveButton>
        </Link>
      </S.Footer>
    </S.Wrap>
  );
}

export default OnboardCategoryPage;
