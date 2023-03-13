import { useTheme } from "@emotion/react";
import useOnboardStore from "@/store/onboard";
import Category from "@/components/onboard/Category/Category";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
import * as S from "./onboard.styled";

function OnboardCategoryEditPage() {
  const { cakeStyle, setCakeStyle } = useOnboardStore();
  const { colors } = useTheme();

  const deleteCakeStyle = (targetCakeStyleItem: string) => {
    setCakeStyle(targetCakeStyleItem);
  };

  return (
    <S.Wrap>
      <S.InfoCategoryContainer>
        <S.EditTagContainer>
          {cakeStyle.map(cakeStyleItem => (
            <S.EditTagItem
              type="button"
              onClick={() => deleteCakeStyle(cakeStyleItem)}
              shape="square"
              label={cakeStyleItem}
              key={cakeStyleItem}
            >
              <Text weight={500} size={15} color={colors.grey[800]}>
                {cakeStyleItem}
              </Text>
              <Icon name="close" size="xs" color={colors.grey[600]} />
            </S.EditTagItem>
          ))}
        </S.EditTagContainer>
      </S.InfoCategoryContainer>
      <S.OptionWrap>
        <Category />
      </S.OptionWrap>
      <S.Footer>
        <S.SaveButton disabled={!cakeStyle.length} type="button" label="save" shape="square">
          저장
        </S.SaveButton>
      </S.Footer>
    </S.Wrap>
  );
}

export default OnboardCategoryEditPage;
