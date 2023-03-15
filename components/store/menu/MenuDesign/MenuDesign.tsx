import React from "react";
import { IMenuOption } from "@/api/types/menu";
import { TTable } from "@/api/types/shared";
import ContentBox from "../../ContentBox/ContentBox";
import * as S from "./MenuDesign.styled";

interface IProp {
  design: IMenuOption;
}

function MenuDesign({ design }: IProp) {
  return (
    <ContentBox title="모양변경이 가능한가요?">
      {design.value.map((option, idx) => (
        <S.DesignContent key={(option as TTable).name} isLast={idx === design.value.length - 1}>
          <span>{(option as TTable).name}</span>
          <p>{(option as TTable).desc}</p>
        </S.DesignContent>
      ))}
    </ContentBox>
  );
}

export default MenuDesign;
