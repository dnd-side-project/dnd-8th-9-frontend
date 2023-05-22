import { useTheme } from "@emotion/react";
import { getOverallComment } from "@/utils/util";
import { IStoreDetails } from "@/types/api";
import Text from "@/components/shared/Text/Text";
import Dangdo from "@/components/shared/Dangdo/Dangdo";
import ProgressBar from "../ProgressBar/ProgressBar";
import * as S from "./OverallStats.styled";

interface IProps {
  reviewCount: number;
  reviewStats: IStoreDetails["reviewStats"];
  rating: number;
}

export default function OverallStats({ reviewCount, reviewStats, rating }: IProps) {
  const { colors } = useTheme();

  const OVERALL_COMMENT = getOverallComment(rating);

  return (
    <S.Container>
      <S.Review>
        <Dangdo dangdo={rating} size="xl" />
        <Text weight={500} size={12} color={colors.grey[700]}>
          ({reviewCount}명 참여)
        </Text>
      </S.Review>
      <Text weight={500} color={colors.grey[700]}>
        이 스토의 당도는{` `}
        <Text weight={500} color={colors.pink[700]}>
          {OVERALL_COMMENT}
        </Text>
      </Text>
      <ProgressBar stats={reviewStats} totals={reviewCount} />
    </S.Container>
  );
}
