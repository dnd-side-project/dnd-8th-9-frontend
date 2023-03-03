import React, { SetStateAction, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useButtonDisabledStore } from "@/store/ReviewForm";
import SelectMenu from "@/components/ReviewForm/SelectMenu/SelectMenu";
import SelectSizeDangdo from "@/components/ReviewForm/SelectSizeDangdo/SelectSizeDangdo";
import Detail from "@/components/ReviewForm/Detail/Detail";
import Sumbitted from "@/components/ReviewForm/Submitted/Submitted";
import Button from "@/components/shared/Button/Button";
import { css } from "@emotion/react";
import * as S from "./form.styled";

interface IHandleSubmit {
  isDisabled: boolean;
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
    case 4:
      return <Sumbitted />;
    default:
      return <></>;
  }
};

const handleSubmit = ({ isDisabled, currentPage, setCurrentPage }: IHandleSubmit) => {
  if (!isDisabled) {
    setCurrentPage(currentPage + 1);
  }
};

export default function FormPage() {
  const { asPath } = useRouter();
  const backToReview = asPath
    .split("/")
    .slice(0, asPath.split("/").length - 1)
    .join("/");
  const { isDisabled } = useButtonDisabledStore(state => state);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <S.Container>
      {multiStepForm(currentPage)}
      <S.ButtonWrap>
        <Button
          type="submit"
          label="form"
          shape="square"
          disabled={isDisabled}
          cssProp={
            isDisabled
              ? css`
                  background-color: #c7c7c7;
                  width: 100%;
                `
              : css`
                  background-color: #f45c65;
                  color: #fff;
                  width: 100%;
                `
          }
          onClick={() => handleSubmit({ isDisabled, currentPage, setCurrentPage })}
        >
          {currentPage === 4 ? "작성한 리뷰 보러가기" : "다음"}
        </Button>
        {currentPage === 4 && (
          <Link href={backToReview}>
            <Button
              type="submit"
              label="form"
              shape="square"
              cssProp={css`
                background-color: #fff;
                color: #636363;
                width: 100%;
              `}
              onClick={() => handleSubmit({ isDisabled, currentPage, setCurrentPage })}
            >
              작성 전 화면으로 돌아가기
            </Button>
          </Link>
        )}
      </S.ButtonWrap>
    </S.Container>
  );
}
