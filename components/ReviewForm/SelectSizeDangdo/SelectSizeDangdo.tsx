/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import {
  useFormMenuStore,
  useFormSizeDangdoStore,
  useButtonDisabledStore,
} from "@/store/ReviewForm";
import Button from "@/components/shared/Button/Button";
import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import Heart from "assets/icons/heart.svg";
import * as S from "./SelectSizeDangdo.styled";

const FORM_TITLE = "케이크는 어땠나요?";
const EXPLANATION = "실제 상품을 받고 나서 느낀 감상을\n솔직하게 작성해주세요";

const sizeList = ["미니", "1호", "2호", "3호"];

export default function SelectSizeDangdo() {
  const { name, menuImage } = useFormMenuStore(state => state);
  const { size, dangdo, setSizeDangdo } = useFormSizeDangdoStore(state => state);
  const { setButtonDisabled, setButtonAbled } = useButtonDisabledStore(state => state);

  useEffect(() => {
    setButtonDisabled();
  }, [setButtonAbled, setButtonDisabled]);

  useEffect(() => {
    if (size !== "" && dangdo) setButtonAbled();
  }, [size, dangdo, setButtonAbled]);

  return (
    <S.Container>
      <S.FormTitle>{FORM_TITLE}</S.FormTitle>
      <S.Explanation>{EXPLANATION}</S.Explanation>
      <S.Size>
        <ImageWrap percent={50} borderRadius={8}>
          <img src={menuImage} alt="menu" className="menu" />
        </ImageWrap>
        <S.Name>{name}</S.Name>
        <S.SizeList>
          {sizeList.map(cakeSize => (
            <Button
              key={cakeSize}
              type="button"
              label="size"
              shape="round"
              cssProp={cakeSize === size ? S.ClickedSizeButton : S.SizeButton}
              onClick={() => setSizeDangdo({ size: cakeSize, dangdo })}
            >
              {cakeSize}
            </Button>
          ))}
        </S.SizeList>
        <S.DangdoBox>
          <S.DangdoComment>
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
              onChange={e => setSizeDangdo({ size, dangdo: +e.target.value })}
            />
          </S.InputWrap>
        </S.DangdoBox>
      </S.Size>
    </S.Container>
  );
}
