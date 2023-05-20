import { useTheme } from "@emotion/react";
import { IReviewStats, IStoreDetails } from "@/types/api";
import Text from "@/components/shared/Text/Text";
import * as S from "./ProgressBar.styled";

interface IProp {
  stats: IStoreDetails["reviewStats"];
  isPreview?: boolean;
  totals: number;
}

interface IEmoji {
  [key: string]: string;
}

const EMOJI: IEmoji = {
  맛있어요: "😋",
  "가성비가 좋아요": "👍",
  "선물하기 좋아요": "💝",
  "응답이 빨라요": "💨",
  친절해요: "👼",
};

export default function ProgressBar({ totals, stats, isPreview = false }: IProp) {
  const { colors } = useTheme();

  const data = isPreview ? Object.keys(stats).slice(0, 3) : Object.keys(stats);

  return (
    <S.StatContainer className={isPreview ? "isPreview" : ""}>
      {data.map((statName, idx) => (
        <S.StatItem key={statName}>
          <Text size={isPreview ? 14 : 13} weight={600} color={colors.grey[800]}>
            {statName} {isPreview && EMOJI[statName]}
          </Text>
          <S.Bar count={stats[statName as keyof IReviewStats]} totals={totals} rank={idx}>
            <div />
          </S.Bar>
          <Text size={isPreview ? 14 : 13} weight={500} color={colors.grey[800]}>
            {stats[statName as keyof IReviewStats]}
          </Text>
        </S.StatItem>
      ))}
    </S.StatContainer>
  );
}
