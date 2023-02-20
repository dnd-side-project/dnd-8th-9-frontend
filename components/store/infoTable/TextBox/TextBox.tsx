import React from "react";

import * as S from "./TextBox.styled";

interface IData {
  data: {
    name: string;
    value: string[];
  };
}

export default function TextBox({ data }: IData) {
  const dataValues = data.value;
  return (
    <S.Container>
      <S.Name>{data.name}</S.Name>
      {dataValues.map(value => (
        <S.Value key={value}>{value}</S.Value>
      ))}
    </S.Container>
  );
}
