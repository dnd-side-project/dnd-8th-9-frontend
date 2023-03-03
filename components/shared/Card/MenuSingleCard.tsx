import { useTheme } from "@emotion/react";
import { IRandomMenuItem } from "@/api/types/randomMenuList";
import { generatePriceString } from "@/utils/util";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IRandomMenuItem;
  isEditMode?: boolean;
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

function MenuSingleCard({ data, isEditMode = false, size = "m" }: IProps) {
  const { colors } = useTheme();
  const { price, name, menuImage, summary } = data;

  return (
    <Card
      imgWidth={SIZE_STYLE[size].imgWidth}
      imgHeight={SIZE_STYLE[size].imgHeight}
      dir="row"
      image={menuImage}
      gap={16}
      isEditMode={isEditMode}
    >
      <S.ContentWrap type="menuSingle">
        <S.Menu weight={700} size={16} color={colors.grey[900]}>
          {name}
        </S.Menu>
        <S.Desc weight={400} size={13} color={colors.grey[700]}>
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
