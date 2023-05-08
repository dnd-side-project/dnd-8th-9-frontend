import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { generatePriceString } from "@/utils/util";
import { IMenuListItem } from "@/types/api";
import { IMenuListItemSimple } from "@/mocks/mockData/menuList";
import * as S from "./Card.styled";
import Card from "./Card";

interface IProps {
  data: IMenuListItem | IMenuListItemSimple;
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
  const { asPath } = useRouter();

  const { name, menuImages, price } = data;

  // NOTE: IMenuListItem : desc 빠짐.
  // NOTE: IMenuListItemSpecific: desc 있음.
  return (
    <Link href={`${asPath}/${data.id}`}>
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
            {(data as IMenuListItemSimple).desc ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit"}
          </S.Desc>
          {size === "m" && (
            <S.Price weight={600} size={18} color={colors.blue[800]}>
              {generatePriceString(price)}
            </S.Price>
          )}
        </S.ContentWrap>
      </Card>
    </Link>
  );
}

export default MenuSingleCard;
