import { useTheme } from "@emotion/react";
import { IRandomMenuItem } from "@/api/types/randomMenuList";
import { generatePriceString } from "@/utils/util";
import Platform from "../Platform/Platform";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IRandomMenuItem;
  isEditMode?: boolean;
  size?: "s" | "m";
}

const SIZE_STYLE = {
  s: {
    imgWidth: 142,
    imgHeight: 142,
    gap: 10,
  },
  m: {
    imgWidth: 158,
    imgHeight: 156,
    gap: 16,
  },
};

function MenuDoubleCard({ data, isEditMode = false, size = "m" }: IProps) {
  const { colors } = useTheme();
  const { storeName, price, name, menuImage, links } = data;

  return (
    <Card
      imgWidth={SIZE_STYLE[size].imgWidth}
      imgHeight={SIZE_STYLE[size].imgHeight}
      dir="col"
      image={menuImage}
      gap={SIZE_STYLE[size].gap}
      isEditMode={isEditMode}
      data={data}
      type="menu"
    >
      <S.ContentWrap type="menuDouble">
        <S.Store weight={500} size={12} color={colors.grey[600]}>
          {storeName}
        </S.Store>
        <S.Menu weight={600} size={15}>
          {name}
        </S.Menu>
        <S.Price weight={700} size={16} color={colors.blue[800]}>
          {generatePriceString(price)}
        </S.Price>
        <Platform links={links} />
      </S.ContentWrap>
    </Card>
  );
}

export default MenuDoubleCard;
