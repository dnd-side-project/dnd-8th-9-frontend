import Link from "next/link";
import { useTheme } from "@emotion/react";
import { Logo } from "@/assets/icons";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./HomeHeader.styled";

function HomeHeader() {
  const { colors } = useTheme();

  return (
    <S.HeaderWrap>
      <Logo />
      <Link href="/search">
        <S.Searchbar>
          <Icon name="search" size="m" color={colors.grey[600]} />
          <input type="text" placeholder="케이크 디자인 검색하기" />
        </S.Searchbar>
      </Link>
    </S.HeaderWrap>
  );
}

export default HomeHeader;
