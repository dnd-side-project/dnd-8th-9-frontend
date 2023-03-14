import React from "react";
import { IMenuOption } from "@/api/types/menu";
import { ITable } from "@/api/types/shared";
import ContentBox from "../../ContentBox/ContentBox";
import * as S from "./MenuTaste.styled";

interface IProp {
  taste: IMenuOption;
}

function MenuTaste({ taste }: IProp) {
  return (
    <ContentBox title="이런 맛들이 있어요!" cssProp={S.contentTasteBoxCss} name="flavor">
      <S.TasteContent>
        <span className="note">{taste.note}</span>
        <div className="tasteList">
          {taste.value.map((option, idx) => (
            <React.Fragment key={(option as ITable).name}>
              <div className="number">
                <span>{idx + 1}</span>
              </div>
              <div className="text">
                <span>{(option as ITable).name}</span>
                <p>{(option as ITable).desc}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </S.TasteContent>
    </ContentBox>
  );
}

export default MenuTaste;
