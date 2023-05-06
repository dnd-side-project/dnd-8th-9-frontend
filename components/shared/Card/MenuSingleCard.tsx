import { useTheme } from "@emotion/react";
import { generatePriceString } from "@/utils/util";
import { useGetMenuDetails } from "@/hooks/queries/menu";
import * as S from "./Card.styled";
import Card from "./Card";

interface IProps {
  menuId: number;
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

function MenuSingleCard({ menuId, mode, size = "m" }: IProps) {
  const { colors } = useTheme();

  const { data: menuData, isError, isLoading } = useGetMenuDetails(Number(menuId));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const { basePrice, name, menuImages } = menuData.data;

  // NOTE: summary 데이터에서 빠짐. 현재 hard coded.
  return (
    <Card
      imgWidth={SIZE_STYLE[size].imgWidth}
      imgHeight={SIZE_STYLE[size].imgHeight}
      dir="row"
      image={menuImages}
      gap={16}
      mode={mode}
      data={menuData.data}
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
