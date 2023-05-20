import { useState } from "react";
import useReviewStore, { IReviewState } from "@/store/review";
import SelectMenu from "@/components/ReviewForm/SelectMenu/SelectMenu";
import SelectSizeDangdo from "@/components/ReviewForm/SelectSizeDangdo/SelectSizeDangdo";
import Detail from "@/components/ReviewForm/Detail/Detail";
import Sumbitted from "@/components/ReviewForm/Submitted/Submitted";
import * as S from "./form.styled";

const multiStepForm = (currentPage: number) => {
  switch (currentPage) {
    case 1:
      return <SelectMenu />;
    case 2:
      return <SelectSizeDangdo />;
    case 3:
      return <Detail />;
    case 4:
      return <Sumbitted />;
    default:
      return <></>;
  }
};

const RequiredField = [["menuId"], ["sizeOption", "dangdo"], ["content", "goodPoint"]];

export default function FormPage() {
  const { reviewState } = useReviewStore();

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  const canMoveToNextPage = Object.keys(reviewState)
    .filter(key => RequiredField[currentPage - 1].includes(key))
    .map(key => reviewState[key as keyof IReviewState])
    .every(Boolean);

  return (
    <S.Container>
      {multiStepForm(currentPage)}
      <S.ButtonWrap>
        {currentPage === 1 && (
          <S.NextButton
            type="button"
            shape="square"
            label="next"
            disabled={!canMoveToNextPage}
            onClick={handleNextPage}
          >
            다음
          </S.NextButton>
        )}
        {currentPage === 2 && (
          <>
            <S.PrevButton type="button" shape="square" label="previous" onClick={handlePrevPage}>
              이전
            </S.PrevButton>
            <S.NextButton
              type="button"
              shape="square"
              label="next"
              disabled={!canMoveToNextPage}
              onClick={handleNextPage}
            >
              다음
            </S.NextButton>
          </>
        )}
        {currentPage === 3 && (
          <>
            <S.PrevButton type="button" shape="square" label="previous" onClick={handlePrevPage}>
              이전
            </S.PrevButton>
            <S.NextButton
              type="submit"
              shape="square"
              label="submit form"
              disabled={!canMoveToNextPage}
              onClick={handleSubmit}
            >
              리뷰등록
            </S.NextButton>
          </>
        )}
      </S.ButtonWrap>
    </S.Container>
  );
}
