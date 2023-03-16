import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import Text from "../shared/Text/Text";
import * as S from "./ReviewFilter.styled";

const REVIEW_FILTER_BUTTONS = ["전체", "당도리뷰", "외부사이트리뷰"];

export default function ReviewFilter() {
  const { colors } = useTheme();
  const [currentReviewFilter, setCurrentReviewFilter] = useState(REVIEW_FILTER_BUTTONS[0]);

  const handleFilterClick = (filterOption: string) => {
    setCurrentReviewFilter(filterOption);
  };

  return (
    <S.Container>
      {REVIEW_FILTER_BUTTONS.map(filterOption => (
        <S.FilterButton
          key={filterOption}
          type="button"
          label={filterOption}
          shape="round"
          onClick={() => handleFilterClick(filterOption)}
          className={filterOption === currentReviewFilter ? "isSelected" : ""}
        >
          <Text
            size={15}
            color={filterOption === currentReviewFilter ? colors.grey[100] : colors.grey[800]}
          >
            {filterOption}
          </Text>
        </S.FilterButton>
      ))}
    </S.Container>
  );
}
