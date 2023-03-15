import React from "react";
import { IMenuOption } from "@/api/types/menu";
import { TTable } from "@/api/types/shared";
import * as S from "./MenuDesign.styled";

interface IProp {
  design: IMenuOption;
}

function MenuDesign({ design }: IProp) {
  return (
    <>
      {design.value.map((option, idx) => (
        <S.DesignContent key={(option as TTable).name} isLast={idx === design.value.length - 1}>
          <span>{(option as TTable).name}</span>
          <p>{(option as TTable).desc}</p>
        </S.DesignContent>
      ))}
    </>
  );
}

export default MenuDesign;
