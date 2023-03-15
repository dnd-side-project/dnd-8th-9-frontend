import { useTheme } from "@emotion/react";
import { getOverallComment } from "@/utils/util";
import { IOverallStats } from "@/api/types/review";
import Text from "@/components/shared/Text/Text";
import Dangdo from "@/components/shared/Dangdo/Dangdo";
import ProgressBar from "../ProgressBar/ProgressBar";
import * as S from "./OverallStats.styled";

export default function OverallStats({ rating, totalReviews, stats }: IOverallStats) {
  const { colors } = useTheme();
  const OVERALL_COMMENT = getOverallComment(rating);

  return (
    <S.Container>
      <S.Review>
        <Dangdo dangdo={rating} size="l" />
        <Text weight={500} size={12} color={colors.grey[700]}>
          ({totalReviews}명 참여)
        </Text>
      </S.Review>
      <Text weight={500} color={colors.pink[700]}>
        이 스토의 당도는 {OVERALL_COMMENT}
      </Text>
      <ProgressBar stats={stats} />
    </S.Container>
  );
}
