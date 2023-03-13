import { useTheme } from "@emotion/react";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./RecieveMethod.styled";

interface IProp {
  canDelivery: boolean;
  canPickup: boolean;
}

function RecieveMethod({ canDelivery, canPickup }: IProp) {
  const { colors } = useTheme();

  return (
    <S.RecieveMethodContentBox title="수령방식" hasInfoIcon>
      {canDelivery && (
        <S.Content>
          <Icon name="delivery" fill={colors.blue[700]} size="l" />
          <S.Method>택배가능</S.Method>
          <S.Desc>퀵-셀프신청, 1 ~ 2일 수령가능</S.Desc>
        </S.Content>
      )}
      {canPickup && (
        <S.Content>
          <Icon name="store" fill={colors.blue[700]} size="l" />
          <S.Method>픽업가능</S.Method>
          <S.Desc>영업일 기준, 공휴일 불가</S.Desc>
        </S.Content>
      )}
    </S.RecieveMethodContentBox>
  );
}

export default RecieveMethod;
