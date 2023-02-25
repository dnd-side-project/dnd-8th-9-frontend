import Icon from "@/components/shared/Icon/Icon";
import { useTheme } from "@emotion/react";
import ContentBox from "../../ContentBox/ContentBox";
import * as S from "./RecieveMethod.styled";

interface IProp {
  canDelivery: boolean;
  canPickup: boolean;
}

function RecieveMethod({ canDelivery, canPickup }: IProp) {
  const { colors } = useTheme();

  return (
    <ContentBox title="수령방식" cssProp={S.contentBoxCss}>
      {canDelivery && (
        <S.Content>
          <Icon name="delivery" color={colors.gray[200]} size="m" />
          <span>택배가능</span>
          <small>국내배송, 결제 4 - 5일 내 배송</small>
        </S.Content>
      )}
      {canPickup && (
        <S.Content>
          <Icon name="store" color={colors.gray[200]} size="m" />
          <span>픽업가능</span>
          <small>영업일 기준, 공휴일 불가</small>
        </S.Content>
      )}
    </ContentBox>
  );
}

export default RecieveMethod;
