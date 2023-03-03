import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { SearchClose } from "@/assets/icons";
import useSearchStore from "@/store/search";
import Icon from "@/components/shared/Icon/Icon";
import Button from "@/components/shared/Button/Button";
import * as S from "./SearchNav.styled";

function SearchNav() {
  const { colors } = useTheme();
  const { back: previous } = useRouter();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const { addSearchHistory, updateCurrentSearch } = useSearchStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addSearchHistory(searchKeyword);
    updateCurrentSearch(searchKeyword);
    setSearchKeyword("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const deleteKeyword = () => {
    setSearchKeyword("");
  };

  const previousPage = () => {
    previous();
  };

  return (
    <S.Wrap>
      <Button onClick={previousPage} type="button" label="previous page" shape="square">
        <Icon name="arrowLeft" size="l" color={colors.grey[700]} />
      </Button>
      <S.InputForm onSubmit={handleSubmit}>
        <Icon name="search" size="m" color={colors.grey[600]} />
        <input
          type="text"
          placeholder="케이크 디자인 검색하기"
          value={searchKeyword}
          onChange={handleChange}
        />
        <SearchClose onClick={deleteKeyword} />
      </S.InputForm>
    </S.Wrap>
  );
}

export default SearchNav;
