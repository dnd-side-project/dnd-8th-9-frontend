import { useTheme } from "@emotion/react";
import { IStoreItem } from "@/api/types/storeList";
import { generateRangePriceString } from "@/utils/util";
import Platform from "../Platform/Platform";
import CategoryTag from "../Tag/common/CategoryTag";
import Dangdo from "../Dangdo/Dangdo";
import Text from "../Text/Text";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IStoreItem;
  rank: number;
}

// NOTE: data 추가 필요
const REVIEW_COUNT = 92;

function StoreSingleCard({ data, rank }: IProps) {
  const { colors } = useTheme();
  const {
    name,
    rating,
    links,
    category,
    priceRange: { max, min },
    storeImages,
  } = data;

  return (
    <Card imgWidth={126} imgHeight={126} dir="row" image={storeImages[0].url} gap={20} rank={rank}>
      <S.ContentWrap type="storeSingle">
        <S.Store weight={600} size={15} color={colors.grey[900]}>
          {name}
        </S.Store>
        <S.Review>
          <Dangdo dangdo={rating} />
          <Text size={12} weight={400} color={colors.grey[800]}>
            {`리뷰(${REVIEW_COUNT})`}
          </Text>
        </S.Review>
        <S.Price weight={600} size={13} color={colors.blue[800]}>
          {generateRangePriceString(min, max)}
        </S.Price>
        <Platform links={links} />
        <S.CategoryWrap>
          {category.map(categoryItem => (
            <CategoryTag key={categoryItem} category={categoryItem} />
          ))}
        </S.CategoryWrap>
      </S.ContentWrap>
    </Card>
  );
}

export default StoreSingleCard;
