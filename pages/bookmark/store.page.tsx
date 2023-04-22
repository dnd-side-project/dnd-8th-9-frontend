import { ReactElement, useState } from "react";
import { useTheme } from "@emotion/react";
import useBookmarkStore from "@/store/bookmark";
import { resultTab } from "@/constants/tabs";

import Text from "@/components/shared/Text/Text";
import Button from "@/components/shared/Button/Button";
import StoreDoubleCard from "@/components/shared/Card/StoreDoubleCard";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import SingleNavbar from "@/components/shared/Navbar/SingleNavbar";
import GNB from "@/components/shared/GNB/GNB";
import * as S from "./menu.styled";

function BookmarkStorePage() {
  const { colors } = useTheme();
  const [isEditMode, setIsEditMode] = useState(false);
  const { editBookmarkList, bookmarkStoreList, deleteAllStoreBookmarkList, clearEditBookmarkList } =
    useBookmarkStore();

  const startEditMode = () => {
    setIsEditMode(true);
  };

  const endEditMode = () => {
    setIsEditMode(false);
    clearEditBookmarkList();
  };

  const deleteAll = () => {
    deleteAllStoreBookmarkList();
    clearEditBookmarkList();
  };

  return (
    <div>
      <S.MenuTab menuList={resultTab} target="resultTab" />
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
            <Button
              type="button"
              label="edit"
              shape="square"
              onClick={deleteAll}
              disabled={!editBookmarkList.length}
            >
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
      <S.StoreWrap>
        {bookmarkStoreList.map(store => (
          <StoreDoubleCard key={store.id} data={store} mode={isEditMode ? "edit" : "none"} />
        ))}
      </S.StoreWrap>
    </div>
  );
}

export default BookmarkStorePage;

BookmarkStorePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SingleNavbar text="북마크" />
      {page}
      <GNB />
    </>
  );
};
