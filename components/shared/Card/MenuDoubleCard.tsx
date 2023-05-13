import Link from "next/link";
import { useTheme } from "@emotion/react";
import { generatePriceString } from "@/utils/util";
import { IMenuListItem } from "@/types/api";
import { IMAGE_MOCK } from "@/constants/api";
import Platform from "../Platform/Platform";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IMenuListItem;
  mode?: "edit" | "bookmark" | "none";
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

// NOTE: IMenuListItem : menuImages로 변경
function MenuDoubleCard({ data, mode, size = "m" }: IProps) {
  const { colors } = useTheme();
  const { storeName, price, name, menuImage, links } = data;

  return (
    <Link href={`/store/${data.storeId}`}>
      <Card
        imgWidth={SIZE_STYLE[size].imgWidth}
        imgHeight={SIZE_STYLE[size].imgHeight}
        dir="col"
        image={!menuImage?.length ? IMAGE_MOCK : menuImage[0].url}
        gap={SIZE_STYLE[size].gap}
        mode={mode}
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
          <S.Price weight={700} size={18} color={colors.blue[800]}>
            {generatePriceString(price)}
          </S.Price>
          <Platform links={links} />
        </S.ContentWrap>
      </Card>
    </Link>
  );
}

export default MenuDoubleCard;
