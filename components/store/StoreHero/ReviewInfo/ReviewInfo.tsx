import { useTheme } from "@emotion/react";
import { IStoreDetails } from "@/types/api";
import Text from "@/components/shared/Text/Text";
import ProgressBar from "../../review/ProgressBar/ProgressBar";
import * as S from "./ReviewInfo.styled";

interface IProp {
  reviewStats: IStoreDetails["reviewStats"];
  reviewCount: number;
}

function ReviewInfo({ reviewStats, reviewCount }: IProp) {
  const { colors } = useTheme();

  return (
    <S.ReviewContentBox title="이 스토어의 매력">
      <Text size={13} weight={500} color={colors.grey[700]}>
        전체 리뷰{" "}
        <Text as="strong" size={13} weight={500} color={colors.pink[700]}>
          {reviewCount}
        </Text>
        건
      </Text>
      <ProgressBar stats={reviewStats} totals={reviewCount} isPreview />
    </S.ReviewContentBox>
  );
}

export default ReviewInfo;
