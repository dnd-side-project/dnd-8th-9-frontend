import { useTheme } from "@emotion/react";
import { generateRangePriceString } from "@/utils/util";
import { IStoreListItem } from "@/types/api";
import Platform from "../Platform/Platform";
import CategoryTag from "../Tag/common/CategoryTag";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IStoreListItem;
  mode?: "edit" | "bookmark" | "none";
}

function StoreDoubleCard({ data, mode }: IProps) {
  const { colors } = useTheme();
  const {
    name,
    location,
    links,
    category,
    canPickup,
    canDelivery,
    priceRange: { max, min },
    storeImages,
  } = data;

  return (
    <Card
      imgWidth={328}
      imgHeight={183}
      dir="col"
      image={storeImages}
      gap={16}
      mode={mode}
      canDelivery={canDelivery}
      canPickup={canPickup}
      css={S.storeDoubleCss}
      data={data}
      type="store"
    >
      <S.ContentWrap type="storeDouble">
        <S.Store weight={600} size={16}>
          {name}
        </S.Store>
        <S.Location weight={500} size={12} color={colors.grey[600]}>
          {location}
        </S.Location>
        <S.CategoryWrap>
          {category.map(categoryItem => (
            <CategoryTag key={categoryItem} category={categoryItem} />
          ))}
        </S.CategoryWrap>
        <S.Price weight={600} size={15} color={colors.blue[800]}>
          {generateRangePriceString(min, max)}
        </S.Price>
        <Platform links={links} />
      </S.ContentWrap>
    </Card>
  );
}

export default StoreDoubleCard;
