import { useTheme } from "@emotion/react";
import { IStoreReview } from "@/types/api/review";
import Text from "@/components/shared/Text/Text";
import ProgressBar from "../../review/ProgressBar/ProgressBar";
import * as S from "./ReviewInfo.styled";

interface IProp {
  overallStats: IStoreReview["overallStats"];
}

function ReviewInfo({ overallStats }: IProp) {
  const { totalReviews, stats } = overallStats;
  const { colors } = useTheme();

  return (
    <S.ReviewContentBox title="이 스토어의 매력">
      <Text size={13} weight={500} color={colors.grey[700]}>
        전체 리뷰 {totalReviews}건
      </Text>
      <ProgressBar stats={stats} isPreview />
    </S.ReviewContentBox>
  );
}

export default ReviewInfo;
