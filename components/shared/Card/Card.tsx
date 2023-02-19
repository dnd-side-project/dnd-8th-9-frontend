/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@emotion/react";
import React from "react";
import Icon from "../Icon/Icon";
// import Image from "next/image";
// import { IMenuItem } from "@/api/types/menuList";
import * as S from "./card.style";

export interface IProp {
  menu: {
    id: number;
    name: string;
    menuImage: string;
    summary: string;
    price: number;
  };
}

function Card({ menu }: IProp) {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.ImageWrap>
        <img src={menu.menuImage} alt="menu" />
      </S.ImageWrap>
      <S.IconWrap>
        <Icon name="saveBookmark" size="m" color={colors.gray[900]} />
      </S.IconWrap>
      <S.InfoWrap>
        <h3>{menu.name}</h3>
        <p>{menu.summary}</p>
        <span>{menu.price.toLocaleString()}원</span>
      </S.InfoWrap>
    </S.Container>
  );
}

export default Card;
