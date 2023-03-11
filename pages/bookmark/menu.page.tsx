import { css, useTheme } from "@emotion/react";
import { resultTab } from "@/constants/tabs";
import useBookmarkStore from "@/store/bookmark";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import Button from "@/components/shared/Button/Button";
import Text from "@/components/shared/Text/Text";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
import * as S from "./menu.styled";

function BookmarkDesignPage() {
  const { colors } = useTheme();
  const { bookmarkMenuList } = useBookmarkStore();

  return (
    <div>
      <S.MenuTab
        menuList={resultTab}
        type="fixed"
        target="resultTab"
        css={css`
          --size: ${resultTab.length};
        `}
      />
      <S.ControlBoxWrap>
        <FilterBar />
        <Button type="button" label="edit" shape="square">
          <Text weight={500} color={colors.grey[800]}>
            편집
          </Text>
        </Button>
      </S.ControlBoxWrap>
      <S.MenuWrap>
        {bookmarkMenuList.map(menu => (
          <MenuDoubleCard key={menu.id} data={menu} size="m" />
        ))}
      </S.MenuWrap>
    </div>
  );
}

export default BookmarkDesignPage;
