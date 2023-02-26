/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Button from "@/components/shared/Button/Button";
import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import { css } from "@emotion/react";
import * as S from "./SelectSizeDangdo.styled";

interface ISelectMenu {
  formData: {
    id: number;
    name: string;
    menuImage: string;
    size: string;
    dangdo: number;
    like: string;
    text: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      menuImage: string;
      size: string;
      dangdo: number;
      like: string;
      text: string;
    }>
  >;
}

const FORM_TITLE = "케이크는 어땠나요?";
const EXPLANATION = "실제 상품을 받고 나서 느낀 감상을\n솔직하게 작성해주세요";

const sizeList = ["미니", "1호", "2호", "3호"];

export default function SelectSizeDangdo({ formData, setFormData }: ISelectMenu) {
  const [size, setSize] = useState("미니");
  const [dangdo, setDangdo] = useState(100);

  useEffect(() => {
    setFormData({ ...formData, size, dangdo });
  }, [dangdo, size, formData, setFormData]);

  return (
    <S.Container>
      <S.FormTitle>{FORM_TITLE}</S.FormTitle>
      <S.Explanation>{EXPLANATION}</S.Explanation>
      <S.Size>
        <ImageWrap percent={50} borderRadius={8}>
          <img src={formData.menuImage} alt="menu" className="menu" />
        </ImageWrap>
        <S.Name>{formData.name}</S.Name>
        <S.SizeList>
          {sizeList.map(cakeSize => (
            <Button
              key={cakeSize}
              type="button"
              label="size"
              shape="round"
              cssProp={cakeSize === size ? S.ClickedSizeButton : S.SizeButton}
              onClick={() => setSize(cakeSize)}
            >
              {cakeSize}
            </Button>
          ))}
        </S.SizeList>
        <S.DangdoBox>
          <S.DangdoComment>
            <S.Dangdo>당도 {dangdo}%</S.Dangdo>
            <S.Comment>훌륭해요!</S.Comment>
          </S.DangdoComment>
          <S.InputWrap>
            <input
              className="slider"
              type="range"
              value={dangdo}
              step="20"
              onChange={e => setDangdo(+e.target.value)}
            />
          </S.InputWrap>
        </S.DangdoBox>
      </S.Size>
    </S.Container>
  );
}
