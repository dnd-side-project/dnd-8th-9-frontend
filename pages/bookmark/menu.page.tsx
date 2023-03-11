import { useState } from "react";
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
  const [isEditMode, setIsEditMode] = useState(false);
  const { editBookmarkList, bookmarkMenuList, deleteAllMenuBookmarkList } = useBookmarkStore();

  const startEditMode = () => {
    setIsEditMode(true);
  };

  const endEditMode = () => {
    setIsEditMode(false);
  };

  const deleteAll = () => {
    deleteAllMenuBookmarkList();
  };

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
      {isEditMode ? (
        <S.EditControlBoxWrap>
          <Text weight={500} size={13} color={colors.grey[600]}>
            {editBookmarkList.length}개 선택
          </Text>
          <S.ButtonBox>
            <Button type="button" label="edit" shape="square" onClick={endEditMode}>
              <Text weight={500} color={colors.grey[800]}>
                완료
              </Text>
            </Button>
            <Button type="button" label="edit" shape="square" onClick={deleteAll}>
              <Text weight={500} color={colors.grey[800]}>
                선택삭제
              </Text>
            </Button>
          </S.ButtonBox>
        </S.EditControlBoxWrap>
      ) : (
        <S.ControlBoxWrap>
          <FilterBar />
          <Button type="button" label="edit" shape="square" onClick={startEditMode}>
            <Text weight={500} color={colors.grey[800]}>
              편집
            </Text>
          </Button>
        </S.ControlBoxWrap>
      )}
      <S.MenuWrap>
        {bookmarkMenuList.map(menu => (
          <MenuDoubleCard key={menu.id} data={menu} size="m" mode={isEditMode ? "edit" : "none"} />
        ))}
      </S.MenuWrap>
    </div>
  );
}

export default BookmarkDesignPage;
