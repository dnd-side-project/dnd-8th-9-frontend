import { useTheme } from "@emotion/react";
import useOnboardStore from "@/store/onboard";
import Location from "@/components/onboard/Location/Location";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
import * as S from "./onboard.styled";

function OnboardLocationEditPage() {
  const { location, setLocation } = useOnboardStore();
  const { colors } = useTheme();

  const deleteLocation = (targetLocationItem: string) => {
    setLocation(targetLocationItem);
  };

  return (
    <S.Wrap>
      <S.InfoContainer>
        <S.EditTagContainer>
          {location.map(locationItem => (
            <S.EditTagItem
              type="button"
              onClick={() => deleteLocation(locationItem)}
              shape="square"
              label={locationItem}
              key={locationItem}
            >
              <Text weight={500} size={15} color={colors.grey[800]}>
                {locationItem}
              </Text>
              <Icon name="close" size="xs" color={colors.grey[600]} />
            </S.EditTagItem>
          ))}
        </S.EditTagContainer>
        <Text weight={500} size={14} color={colors.grey[600]}>
          최대 2개
        </Text>
      </S.InfoContainer>
      <S.OptionWrap>
        <Location />
      </S.OptionWrap>
      <S.Footer>
        <S.SaveButton disabled={!location.length} type="button" label="save" shape="square">
          저장
        </S.SaveButton>
      </S.Footer>
    </S.Wrap>
  );
}

export default OnboardLocationEditPage;
