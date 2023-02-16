import React from "react";
import * as S from "./ProgressBar.styled";

interface IStats {
  stats: {
    optionName: string;
    count: number;
  }[];
  isOpened: boolean;
}

export default function ProgressBar({ stats, isOpened }: IStats) {
  return (
    <>
      {stats.map(
        (stat, idx) =>
          (isOpened || (!isOpened && idx < 3)) && (
            <S.Container key={stat.optionName}>
              <S.OptionName>{stat.optionName}</S.OptionName>
              <S.Background>
                <S.Progress count={stat.count} />
              </S.Background>
              <S.Count>{stat.count}</S.Count>
            </S.Container>
          ),
      )}
    </>
  );
}
