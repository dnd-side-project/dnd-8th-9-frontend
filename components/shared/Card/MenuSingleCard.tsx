import { useTheme } from "@emotion/react";
import { IRandomMenuItem } from "@/api/types/randomMenuList";
import { generatePriceString } from "@/utils/util";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IRandomMenuItem;
  mode?: "edit" | "bookmark" | "none";
  size?: "s" | "m";
}

const SIZE_STYLE = {
  s: {
    imgWidth: 76,
    imgHeight: 76,
    gap: 8,
  },
  m: {
    imgWidth: 110,
    imgHeight: 110,
    gap: 16,
  },
};

function MenuSingleCard({ data, mode, size = "m" }: IProps) {
  const { colors } = useTheme();
  const { price, name, menuImage, summary } = data;

  return (
    <Card
      imgWidth={SIZE_STYLE[size].imgWidth}
      imgHeight={SIZE_STYLE[size].imgHeight}
      dir="row"
      image={menuImage}
      gap={16}
      mode={mode}
      data={data}
      type="menu"
    >
      <S.ContentWrap type="menuSingle">
        <S.Menu weight={600} size={15}>
          {name}
        </S.Menu>
        <S.Desc size={12} color={colors.grey[700]}>
          {summary}
        </S.Desc>
        {size === "m" && (
          <S.Price weight={600} size={18} color={colors.blue[800]}>
            {generatePriceString(price)}
          </S.Price>
        )}
      </S.ContentWrap>
    </Card>
  );
}

export default MenuSingleCard;
