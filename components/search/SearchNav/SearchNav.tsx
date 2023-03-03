import { useTheme } from "@emotion/react";
import { SearchClose } from "@/assets/icons";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./SearchNav.styled";

function SearchNav() {
  const { colors } = useTheme();

  return (
    <S.Wrap>
      <Icon name="arrowLeft" size="l" color={colors.grey[700]} />
      <S.InputWrap>
        <Icon name="search" size="m" color={colors.grey[600]} />
        <input type="text" placeholder="케이크 디자인 검색하기" />
        <SearchClose />
      </S.InputWrap>
    </S.Wrap>
  );
}

export default SearchNav;
