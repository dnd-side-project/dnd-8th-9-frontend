/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@emotion/react";
import React from "react";
import Icon from "../Icon/Icon";
import * as S from "./Card.styled";

export interface IProp {
  menu: {
    id: number;
    name: string;
    menuImage: string;
    summary: string;
    price: number;
  };
  option?: string;
}

function Card({ menu, option }: IProp) {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.ImageWrap>
        <img src={menu.menuImage} alt="menu" />
      </S.ImageWrap>
      {option === "menuPage" && (
        <S.IconWrap>
          <Icon name="saveBookmark" size="m" color={colors.black} />
        </S.IconWrap>
      )}
      <S.InfoWrap>
        <h3>{menu.name}</h3>
        <p>{menu.summary}</p>
        {option === "menuPage" && <span>{menu.price.toLocaleString()}원</span>}
      </S.InfoWrap>
    </S.Container>
  );
}

export default Card;
