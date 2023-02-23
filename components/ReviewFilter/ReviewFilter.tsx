import React, { SetStateAction } from "react";
import Button from "../shared/Button/Button";
import * as S from "./ReviewFilter.styled";

interface IFilterClicked {
  filterClicked: string;
  setFilterClicked: React.Dispatch<SetStateAction<string>>;
}

interface IHandleFilter {
  option: string;
  setFilterClicked: React.Dispatch<SetStateAction<string>>;
}

const handleFilter = ({ option, setFilterClicked }: IHandleFilter) => {
  setFilterClicked(option);
};

const ALL_REVIEW = "전체";
const DANGDO_REVIEW = "당도리뷰";
const OTHERS_REVIEW = "외부사이트리뷰";
const ALL = "all";
const DANGDO = "당도";
const OTHERS = "외부사이트";

export default function ReviewFilter({ filterClicked, setFilterClicked }: IFilterClicked) {
  return (
    <S.Container>
      <Button
        type="button"
        label="전체"
        shape="round"
        cssProp={filterClicked === ALL ? S.clickedButton : S.button}
        onClick={() => handleFilter({ option: ALL, setFilterClicked })}
      >
        {ALL_REVIEW}
      </Button>
      <Button
        type="button"
        label="당도리뷰"
        shape="round"
        cssProp={filterClicked === DANGDO ? S.clickedButton : S.button}
        onClick={() => handleFilter({ option: DANGDO, setFilterClicked })}
      >
        {DANGDO_REVIEW}
      </Button>
      <Button
        type="button"
        label="리뷰사이트리뷰"
        shape="round"
        cssProp={filterClicked === OTHERS ? S.clickedButton : S.button}
        onClick={() => handleFilter({ option: OTHERS, setFilterClicked })}
      >
        {OTHERS_REVIEW}
      </Button>
    </S.Container>
  );
}
