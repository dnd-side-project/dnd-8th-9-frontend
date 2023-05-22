/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from "next/image";
import { useTheme } from "@emotion/react";
import useReviewStore from "@/store/review";
import { getOverallComment } from "@/utils/util";
import Dangdo from "@/components/shared/Dangdo/Dangdo";
import Text from "@/components/shared/Text/Text";
import * as S from "./SelectSizeDangdo.styled";

const FORM_TITLE = (storeName: string) => `${storeName}의 케이크는 어땠나요?`;
const EXPLANATION = "실제 케이크를 받고 나서 느낀 감상을\n솔직하게 작성해주세요";

const sizeList = ["미니", "1호", "2호", "3호"];

export default function SelectSizeDangdo() {
  const { colors } = useTheme();
  const { reviewState, updateReviewState } = useReviewStore();
  const { storeName, menuImage, menuName, dangdo, sizeOption } = reviewState;

  const handleSizeChange = (size: string) => {
    updateReviewState("sizeOption", size);
  };

  const handleDangdoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateReviewState("dangdo", Number(e.target.value));
  };

  return (
    <S.Container>
      <S.FormTitle as="h1" weight={600} size={18}>
        {FORM_TITLE(storeName)}
      </S.FormTitle>
      <S.Explanation as="p" color={colors.grey[700]}>
        {EXPLANATION}
      </S.Explanation>
      <S.Size>
        <S.ImageWrap>
          <Image src={menuImage} alt="menu" fill />
        </S.ImageWrap>
        <S.Name size={16} weight={600}>
          {menuName}
        </S.Name>
        <S.SizeList>
          {sizeList.map(cakeSize => (
            <S.SizeButton
              key={cakeSize}
              type="button"
              label="size"
              shape="round"
              className={cakeSize === sizeOption ? "selected" : ""}
              onClick={() => handleSizeChange(cakeSize)}
            >
              {cakeSize}
            </S.SizeButton>
          ))}
        </S.SizeList>
        <S.DangdoBox>
          <S.DangdoComment>
            <Dangdo dangdo={dangdo} size="l" />
            <Text weight={600} color={colors.blue[900]}>
              당도가 {getOverallComment(dangdo)}!
            </Text>
          </S.DangdoComment>
          <S.InputContainer dangdo={dangdo}>
            <datalist id="custom-list">
              <option value="20" />
              <option value="40" />
              <option value="60" />
              <option value="80" />
            </datalist>
            <input
              className="slider"
              type="range"
              value={dangdo}
              step="1"
              onChange={handleDangdoChange}
            />
          </S.InputContainer>
        </S.DangdoBox>
      </S.Size>
    </S.Container>
  );
}
