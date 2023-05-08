import Link from "next/link";
import { useTheme } from "@emotion/react";
import { generatePriceString } from "@/utils/util";
import { IMenuListItem } from "@/types/api";
import { IRandomMenuListItem } from "@/mocks/mockData/randomMenuList";
import Platform from "../Platform/Platform";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IMenuListItem | IRandomMenuListItem;
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

// NOTE: IMenuListItem : Links 없음
// NOTE: IRandomMenuListItem (mockdata) : Links 추가
function MenuDoubleCard({ data, mode, size = "m" }: IProps) {
  const { colors } = useTheme();
  const { storeName, price, name, menuImages } = data;

  return (
    <Link href={`/store/${data.storeId}`}>
      <Card
        imgWidth={SIZE_STYLE[size].imgWidth}
        imgHeight={SIZE_STYLE[size].imgHeight}
        dir="col"
        image={!menuImages?.length ? "https://via.placeholder.com/640x480" : menuImages[0].url}
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
          <S.Price weight={700} size={16} color={colors.blue[800]}>
            {generatePriceString(price)}
          </S.Price>
          {(data as IRandomMenuListItem).links && (
            <Platform links={(data as IRandomMenuListItem).links} />
          )}
        </S.ContentWrap>
      </Card>
    </Link>
  );
}

export default MenuDoubleCard;
