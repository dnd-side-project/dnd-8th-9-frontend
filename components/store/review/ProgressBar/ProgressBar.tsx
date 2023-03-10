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
  λ§μμ΄μ: "π",
  "κ°μ±λΉκ° μ’μμ": "π",
  "μ λ¬ΌνκΈ° μ’μμ": "π",
  "μλ΅μ΄ λΉ¨λΌμ": "π¨",
  μΉμ ν΄μ: "πΌ",
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
