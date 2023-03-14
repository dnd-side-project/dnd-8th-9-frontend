import { useTheme } from "@emotion/react";
import { IStoreReview } from "@/api/types/review";
import Text from "@/components/shared/Text/Text";
import * as S from "./ProgressBar.styled";

interface IProp {
  stats: IStoreReview["overallStats"]["stats"];
  isPreview?: boolean;
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

export default function ProgressBar({ stats, isPreview = false }: IProp) {
  const { colors } = useTheme();

  const data = isPreview ? stats.slice(0, 3) : stats;

  return (
    <S.StatContainer className={isPreview ? "isPreview" : ""}>
      {data.map((stat, idx) => (
        <S.StatItem key={stat.optionName}>
          <Text size={isPreview ? 14 : 13} weight={600} color={colors.grey[800]}>
            {stat.optionName} {isPreview && EMOJI[stat.optionName]}
          </Text>
          <S.Bar count={stat.count} rank={idx}>
            <div />
          </S.Bar>
          <Text size={isPreview ? 14 : 13} weight={500} color={colors.grey[800]}>
            {stat.count}
          </Text>
        </S.StatItem>
      ))}
    </S.StatContainer>
  );
}
