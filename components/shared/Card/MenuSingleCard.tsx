import { useTheme } from "@emotion/react";
import { generatePriceString } from "@/utils/util";
import { IMenuDetails } from "@/types/api";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IMenuDetails;
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
  const { basePrice, name, menuImages } = data;

  // NOTE: summary 데이터에서 빠짐. 현재 hard coded.
  return (
    <Card
      imgWidth={SIZE_STYLE[size].imgWidth}
      imgHeight={SIZE_STYLE[size].imgHeight}
      dir="row"
      image={menuImages}
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
          {/* {summary} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </S.Desc>
        {size === "m" && (
          <S.Price weight={600} size={18} color={colors.blue[800]}>
            {generatePriceString(basePrice)}
          </S.Price>
        )}
      </S.ContentWrap>
    </Card>
  );
}

export default MenuSingleCard;
