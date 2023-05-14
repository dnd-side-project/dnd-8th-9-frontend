import Link from "next/link";
import { useTheme } from "@emotion/react";
import { generateRangePriceString } from "@/utils/util";
import { IStoreListItem } from "@/types/api";
import Platform from "../Platform/Platform";
import CategoryTag from "../Tag/common/CategoryTag";
import Dangdo from "../Dangdo/Dangdo";
import Text from "../Text/Text";
import Card from "./Card";
import * as S from "./Card.styled";

interface IProps {
  data: IStoreListItem;
  rank: number;
}

function StoreSingleCard({ data, rank }: IProps) {
  const { colors } = useTheme();
  const {
    name,
    rating,
    links,
    category,
    priceRange: { max, min },
    storeImages,
    reviewCount,
    id,
  } = data;

  return (
    <Link href={`/store/${id}/menu`}>
      <Card
        data={data}
        type="store"
        imgWidth={126}
        imgHeight={126}
        dir="row"
        image={storeImages[0].url}
        gap={20}
        rank={rank}
      >
        <S.ContentWrap type="storeSingle">
          <S.Store weight={600} size={15}>
            {name}
          </S.Store>
          <S.Review>
            <Dangdo dangdo={rating} />
            <Text size={12} weight={400} color={colors.grey[800]}>
              {`리뷰(${reviewCount})`}
            </Text>
          </S.Review>
          <S.Price weight={600} size={15} color={colors.blue[800]}>
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
    </Link>
  );
}

export default StoreSingleCard;
