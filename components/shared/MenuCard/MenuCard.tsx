/* eslint-disable @next/next/no-img-element */
import React, { FormEvent } from "react";
import { useTheme } from "@emotion/react";
import ImageWrap from "../ImageWrap/ImageWrap";
import Icon from "../Icon/Icon";
import * as S from "./MenuCard.styled";

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

function MenuCard({ menu, option }: IProp) {
  const { colors } = useTheme();

  return (
    <S.Container isMenuPage={option === "option"}>
      <ImageWrap percent={25} borderRadius={8}>
        <img src={menu.menuImage} alt="menu" className="menu" />
      </ImageWrap>
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

export default MenuCard;
