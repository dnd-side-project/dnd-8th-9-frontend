import React from "react";
import Button from "@/components/shared/Button/Button";
import { css, useTheme } from "@emotion/react";
import { store } from "@/mocks/mockData/store";
import { Copy } from "@/assets/icons";
import * as S from "./order.styled";

export interface TTable {
  name: string;
  desc: string;
  [key: string]: string;
}

function OrderTemplatePage() {
  const { orderForm } = store;
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.FormBox>
        {orderForm.map(el => (
          <S.FormCell key={el.value}>
            <S.Title>{el.value}</S.Title>
            <input placeholder={el.placeholder} />
          </S.FormCell>
        ))}
      </S.FormBox>
      <S.TextBox>
        당도는 현재 예약/결제 서비스를 운영하고 있지 않습니다. 주문 양식은 업체에서 제공해준
        정보이며, 해당 업체를 통해 실제 결제가 이루어져야 케이크 주문/예약이 가능합니다.
      </S.TextBox>
      <Button
        type="button"
        label="복사하기"
        shape="square"
        cssProp={css`
          background-color: ${colors.blue[200]};
          color: ${colors.blue[700]};
          width: 32.8rem;
          gap: 0.8rem;
        `}
      >
        <>
          <Copy height={16} width={16} viewBox="0 0 19 19" />
          복사하기
        </>
      </Button>
    </S.Container>
  );
}

export default OrderTemplatePage;
