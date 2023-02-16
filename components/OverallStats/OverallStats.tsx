import { useState } from "react";
import { Theme, css } from "@emotion/react";
import Heart from "assets/icons/heart.svg";
import Pencil from "assets/icons/pencil.svg";
import ArrowDown from "assets/icons/arrow-down.svg";
import ArrowUp from "assets/icons/arrow-up.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../shared/Button/Button";
import * as S from "./OverallStats.styled";

interface IOverallStats {
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
  // TODO: 스토어의 당도는 휼륭해요 <- 이 데이터 없음
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => {
    setIsOpened(() => !isOpened);
  };

  return (
    <S.Container>
      <S.Comment>
        <Heart height={19} width={19} viewBox="0 0 17 17" fill="red" />
        <S.Rating>당도 {rating}%</S.Rating>
        <S.TotalReviews>({totalReviews}명 참여)</S.TotalReviews>
      </S.Comment>
      <S.OverallComment>
        이 스토의 당도는 <span>훌륭해요!</span>
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
      <Button
        type="submit"
        label="submit review"
        shape="square"
        cssProp={({ colors, fontSizes }: Theme) =>
          css`
            width: 100%;
            max-width: 48rem;
            color: ${colors.primary};
            border: 1px solid ${colors.primary};
            font-size: ${fontSizes[14]};
            gap: 0.4rem;
          `
        }
      >
        <>
          {/** 색상 바꿔야 함 */}
          <Pencil stroke="#F1424D" />
          {SUBMIT_REVIEW}
        </>
      </Button>
    </S.Container>
  );
}
