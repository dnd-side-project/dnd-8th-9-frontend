import { useTheme } from "@emotion/react";
import { getOverallComment } from "@/utils/util";
import { IStoreReview } from "@/api/types/review";
import Button from "@/components/shared/Button/Button";
import Icon from "@/components/shared/Icon/Icon";
import Tag from "@/components/shared/Tag/Tag";
import * as S from "./ReviewInfo.styled";

interface IProp {
  overallStats: IStoreReview["overallStats"];
}
function ReviewInfo({ overallStats }: IProp) {
  const { colors } = useTheme();
  const { rating, totalReviews, stats } = overallStats;

  return (
    <S.ReviewBox>
      <h3>당도러가 선택한 이 스토어의 매력 🌟</h3>
      <S.ReviewStats>
        <Icon size="m" name="heart" fill={colors.primary} color={colors.primary} />
        <span>{rating}%</span>
        <small>({totalReviews})명 참여</small>
        <strong>{getOverallComment(rating)}</strong>
      </S.ReviewStats>
      <S.ReviewTags className="tags">
        {stats.slice(0, 2).map(({ optionName, count }) => (
          <Tag type="double" label={optionName} key={optionName} cssProp={S.optionStyle}>
            <p>{optionName}</p>
            <span>{count}</span>
          </Tag>
        ))}
        <div className="iconWrap">
          <Icon name="ellipsis" />
        </div>
      </S.ReviewTags>
      <Button type="button" label="write a review" shape="square" cssProp={S.reviewButton}>
        <Icon size="s" name="pencil" color={colors.primary} />
        <p>리뷰쓰기</p>
      </Button>
    </S.ReviewBox>
  );
}

export default ReviewInfo;
