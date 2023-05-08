import { useTheme } from "@emotion/react";
import { IDesign, IMenuOption } from "@/types/api";
import { generatePriceString } from "@/utils/util";
import Text from "@/components/shared/Text/Text";
import * as S from "./MenuDesign.styled";

interface IProp {
  design: IMenuOption;
}

function MenuDesign({ design }: IProp) {
  const { colors } = useTheme();

  return (
    <S.DesignContent>
      {(design.value as IDesign[]).map(({ name, price, desc }) => (
        <div key={name}>
          <S.Name size={15} weight={600} as="p">
            {name}
            <strong>{` (+${generatePriceString(price)})`}</strong>
          </S.Name>
          <Text as="p" size={13} color={colors.grey[700]}>
            {desc}
          </Text>
        </div>
      ))}
    </S.DesignContent>
  );
}

export default MenuDesign;
