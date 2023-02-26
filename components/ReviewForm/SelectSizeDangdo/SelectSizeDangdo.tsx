/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Button from "@/components/shared/Button/Button";
import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import Heart from "assets/icons/heart.svg";
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

  const handleSizeDangdo = (value: number) => {
    setDangdo(value);
    setFormData({ ...formData, size, dangdo: value });
  };

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
            {/** TODO: Dangdo 컴포넌트로 변경 */}
            <S.Dangdo>
              <Heart height={16} width={16} viewBox="0 0 19 19" />
              당도 {dangdo}%
            </S.Dangdo>
            <S.Comment>훌륭해요!</S.Comment>
          </S.DangdoComment>
          <S.InputWrap>
            <input
              className="slider"
              type="range"
              value={dangdo}
              step="20"
              onChange={e => handleSizeDangdo(+e.target.value)}
            />
          </S.InputWrap>
        </S.DangdoBox>
      </S.Size>
    </S.Container>
  );
}
