import React from "react";
import * as S from "./Table.styled";

interface IContents {
  option: string;
  data: ({ day: string; hour: string } | { key: string; value: string })[];
}

interface IEl {
  [key: string]: string;
}

interface IOptions {
  [key: string]: { [key: string]: string };
}

const optionList: IOptions = {
  notice: {
    key: "day",
    value: "hour",
  },
  info: {
    key: "key",
    value: "value",
  },
};

export default function Table({ option, data }: IContents) {
  const { key, value } = optionList[option];

  return (
    <>
      {data.map((el: IEl) => (
        <S.Container key={el[key]}>
          <S.Cell option={option}>{el[key]}</S.Cell>
          <S.Cell option={option}>{el[value]}</S.Cell>
        </S.Container>
      ))}
    </>
  );
}
