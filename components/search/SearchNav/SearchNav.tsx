import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { SearchClose } from "@/assets/icons";
import useSearchStore from "@/store/search";
import Icon from "@/components/shared/Icon/Icon";
import Button from "@/components/shared/Button/Button";
import * as S from "./SearchNav.styled";

interface IProps {
  mode: "menu" | "store" | "search";
}

function SearchNav({ mode }: IProps) {
  const { colors } = useTheme();
  const {
    back: previous,
    push,
    pathname,
    replace,
    query: { key },
  } = useRouter();
  const { addSearchHistory, updateCurrentSearch } = useSearchStore();
  const [searchKeyword, setSearchKeyword] = useState<string>((key as string) || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addSearchHistory(searchKeyword);
    updateCurrentSearch(searchKeyword);

    if (!key) {
      if (mode === "search") {
        push({ pathname: `${pathname}/result/menu`, query: { key: searchKeyword } });
      } else {
        push({ pathname: `${pathname}`, query: { key: searchKeyword } });
      }
    } else {
      replace({
        query: { key: searchKeyword },
      });
    }
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
