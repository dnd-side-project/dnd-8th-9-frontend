import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import Heart from "assets/icons/heart.svg";
import Pencil from "assets/icons/pencil.svg";
import ArrowDown from "assets/icons/arrow-down.svg";
import ArrowUp from "assets/icons/arrow-up.svg";
import { getOverallComment } from "@/utils/util";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../shared/Button/Button";
import * as S from "./OverallStats.styled";

export interface IOverallStats {
  rating: number;
  totalReviews: number;
  stats: {
    optionName: string;
    count: number;
  }[];
}

// TODO: 상수 분리해야 함
const SUBMIT_REVIEW = "리뷰쓰기";
const SHOW_MORE = "더보기";
const CLOSE = "접기";

export default function OverallStats({ rating, totalReviews, stats }: IOverallStats) {
  const [isOpened, setIsOpened] = useState(false);
  const OVERALL_COMMENT = getOverallComment(rating);
  const { asPath } = useRouter();
  const { colors, fontSizes } = useTheme();

  const handleIsOpened = () => {
    setIsOpened(() => !isOpened);
  };

  return (
    <S.Container>
      <S.Review>
        <Heart height={19} width={19} viewBox="0 0 17 17" fill="red" />
        <S.Rating>당도 {rating}%</S.Rating>
        <S.TotalReviews>({totalReviews}명 참여)</S.TotalReviews>
      </S.Review>
      <S.OverallComment>
        이 스토의 당도는 <span>{OVERALL_COMMENT}</span>
      </S.OverallComment>
      <S.ProgressBox>
        <ProgressBar stats={stats} isOpened={isOpened} />
        <S.Arrow onClick={handleIsOpened}>
          {isOpened ? (
            <>
              {CLOSE}
              <ArrowUp width={18} height={18} />
            </>
          ) : (
            <>
              {SHOW_MORE}
              <ArrowDown width={18} height={18} />
            </>
          )}
        </S.Arrow>
      </S.ProgressBox>
      <Link href={`${asPath}/review`}>
        <Button
          type="button"
          label="write a review"
          shape="square"
          cssProp={() => S.Button(`${colors.primary}`, `${fontSizes[14]}`)}
        >
          <>
            <Pencil stroke={colors.primary} width={16} height={16} fill="none" />
            {SUBMIT_REVIEW}
          </>
        </Button>
      </Link>
    </S.Container>
  );
}
