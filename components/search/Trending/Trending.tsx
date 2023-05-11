import { useTheme } from "@emotion/react";
import { TrendDown, TrendNew, TrendSame, TrendUp } from "@/assets/icons";
import { Text } from "@/components/shared/Text/Text.styled";
import { ReactElement } from "react";
import * as S from "./Trending.styled";

const TRENDING_KEYWORD_DATA = [
  { keyword: "부모님 케이크", status: "up" },
  { keyword: "퇴사케이크", status: "same" },
  { keyword: "맞춤케이크", status: "new" },
  { keyword: "레터링케이크", status: "same" },
  { keyword: "당일 사진케이크", status: "up" },
  { keyword: "군인케이크", status: "down" },
  { keyword: "환갑케이크", status: "down" },
  { keyword: "레터링쿠키", status: "new" },
  { keyword: "레터링 케이크", status: "new" },
  { keyword: "캔들 래터링케이크", status: "up" },
];

interface IStatusIcon {
  [key: string]: ReactElement;
}

const STATUS_ICON: IStatusIcon = {
  up: <TrendUp />,
  down: <TrendDown />,
  new: <TrendNew />,
  same: <TrendSame />,
};

function Trending() {
  const { colors } = useTheme();
  return (
    <div>
      <S.Header>
        <Text as="h3" size={16} weight={600} color={colors.grey[900]}>
          인기 검색어
        </Text>
        <Text size={12} weight={400} color={colors.grey[700]}>
          최근 한달 동안 가장 많이 검색되었어요
        </Text>
      </S.Header>
      <S.TrendingList>
        {TRENDING_KEYWORD_DATA.map(({ keyword, status }, idx) => (
          <div key={keyword}>
            <Text size={16} weight={600} color={colors.grey[800]}>
              {idx + 1}
            </Text>
            {STATUS_ICON[status]}
            <Text size={16} weight={400} color={colors.grey[800]}>
              {keyword}
            </Text>
          </div>
        ))}
      </S.TrendingList>
    </div>
  );
}

export default Trending;
