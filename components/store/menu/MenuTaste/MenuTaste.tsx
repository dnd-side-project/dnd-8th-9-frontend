import React from "react";
import { useTheme } from "@emotion/react";
import { IMenuOption } from "@/api/types/menu";
import Text from "@/components/shared/Text/Text";
import { ITable } from "@/api/types/shared";
import ContentBox from "../../ContentBox/ContentBox";
import * as S from "./MenuTaste.styled";

interface IProp {
  taste: IMenuOption;
}

function MenuTaste({ taste }: IProp) {
  const { colors } = useTheme();

  return (
    <S.TasteContent>
      {taste.value.map((option, idx) => (
        <React.Fragment key={(option as TTable).name}>
          <S.NumberWrap>
            <Text weight={600} color={colors.blue[700]}>
              {idx + 1}
            </Text>
          </S.NumberWrap>
          <S.TextWrap>
            <Text size={15} weight={600}>
              {(option as TTable).name}
            </Text>
            <Text as="p" size={13} color={colors.grey[700]}>
              {(option as TTable).desc}
            </Text>
          </S.TextWrap>
        </React.Fragment>
      ))}
    </S.TasteContent>
  );
}

export default MenuTaste;
