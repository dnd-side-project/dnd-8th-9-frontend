import { useTheme } from "@emotion/react";
import { IStore } from "@/api/types/store";
import { generateRangePriceString, getOverallComment } from "@/utils/util";
import CategoryTag from "@/components/shared/Tag/common/CategoryTag";
import Dangdo from "@/components/shared/Dangdo/Dangdo";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
import * as S from "./MainInfo.styled";

interface IProp {
  data: IStore;
}

function MainInfo({ data }: IProp) {
  const { colors } = useTheme();
  const { name, category, location, priceRange, rating } = data;

  return (
    <S.InfoBox>
      <S.Header>
        <div>
          <Text as="h1" weight={700} size={20}>
            {name}
          </Text>
          <Icon name="saveBookmarkWide" size="m" color={colors.grey[400]} fill={colors.grey[400]} />
        </div>
        <Icon name="share" size="l" color={colors.grey[800]} />
      </S.Header>
      <S.CategoryWrap>
        {category?.map(categoryItem => (
          <CategoryTag key={categoryItem} category={categoryItem} />
        ))}
      </S.CategoryWrap>
      <S.Location weight={400} size={13} color={colors.grey[800]}>
        {location}
      </S.Location>
      <S.ReviewWrap>
        <Dangdo dangdo={rating} />
        <Text weight={600} size={15} color={colors.pink[700]}>
          {getOverallComment(rating)}
        </Text>
      </S.ReviewWrap>
      <S.Price size={18} weight={700} color={colors.blue[800]}>
        <small>기본</small>
        {priceRange && generateRangePriceString(priceRange.min, priceRange.max, false)}
      </S.Price>
    </S.InfoBox>
  );
}

export default MainInfo;
