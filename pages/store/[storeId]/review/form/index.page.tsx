import React, { SetStateAction, useState } from "react";
import SelectMenu from "@/components/ReviewForm/SelectMenu/SelectMenu";
import SelectSizeDangdo from "@/components/ReviewForm/SelectSizeDangdo/SelectSizeDangdo";
import Detail from "@/components/ReviewForm/Detail/Detail";
import Sumbitted from "@/components/ReviewForm/Submitted/Submitted";
import Button from "@/components/shared/Button/Button";
import { css } from "@emotion/react";
import * as S from "./form.styled";

interface IHandleFormButton {
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

const multiStepForm = (currentPage: number) => {
  switch (currentPage) {
    case 1:
      return <SelectMenu />;
    case 2:
      return <SelectSizeDangdo />;
    case 3:
      return <Detail />;
    // case 4:
    //   return <Sumbitted formData={formData} setFormData={setFormData} />;
    default:
      return <></>;
  }
};

const handleFormButton = ({ currentPage, setCurrentPage }: IHandleFormButton) => {
  setCurrentPage(currentPage + 1);
};

export default function FormPage() {
  const [currentPage, setCurrentPage] = useState(1); // TODO: 새로고침해도 남아있게 변경

  return (
    <S.Container>
      {multiStepForm(currentPage)}
      <Button
        type="submit"
        label="form"
        shape="square"
        cssProp={css`
          background-color: #c7c7c7;
          width: 100%;
        `}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        다음
      </Button>
    </S.Container>
  );
}

/** 현재 페이지 상태로 -> 컴포넌트 바꿔끼기 : Done
 * 버튼 누르면 -> 현재 페이지 상태 변경, 리뷰 데이터 변경
 * 버튼 활성화 / 비활성화 -> 리뷰 데이터 변경 있으면?
 * 버튼 css props -> 조건으로 넣어야 함
 */
