/* eslint-disable @next/next/no-img-element */
import React from "react";
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
  return (
    <S.Container>
      <S.ImageWrap>
        <img src={menu.menuImage} alt="menu" />
      </S.ImageWrap>
      <S.InfoWrap>
        <h3>{menu.name}</h3>
        <p>{menu.summary}</p>
        <span>{menu.price.toLocaleString()}원</span>
      </S.InfoWrap>
    </S.Container>
  );
}

export default Card;
