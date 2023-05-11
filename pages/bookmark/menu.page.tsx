import { useState, ReactElement } from "react";
import { useTheme } from "@emotion/react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { userQueryKey } from "@/constants/queryKey";
import { resultTab } from "@/constants/tabs";
import { useGetMenuBookmarkList } from "@/hooks/queries/user";
import useBookmarkStore from "@/store/bookmark";

import FilterBar from "@/components/shared/FilterBar/FilterBar";
import Button from "@/components/shared/Button/Button";
import Text from "@/components/shared/Text/Text";
import GNB from "@/components/shared/GNB/GNB";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
import SingleNavbar from "@/components/shared/Navbar/SingleNavbar";
import * as S from "./menu.styled";

function BookmarkDesignPage() {
  const { colors } = useTheme();
  const [isEditMode, setIsEditMode] = useState(false);
  const { editBookmarkList, deleteAllMenuBookmarkList, clearEditBookmarkList } = useBookmarkStore();
  const { data: menuBookmarkList, isLoading, isError } = useGetMenuBookmarkList();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const startEditMode = () => {
    setIsEditMode(true);
  };

  const endEditMode = () => {
    setIsEditMode(false);
    clearEditBookmarkList();
  };

  const deleteAll = () => {
    deleteAllMenuBookmarkList();
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
      <S.MenuWrap>
        {menuBookmarkList.data.map(menu => (
          <MenuDoubleCard key={menu.id} data={menu} size="m" mode={isEditMode ? "edit" : "none"} />
        ))}
      </S.MenuWrap>
    </div>
  );
}

export default BookmarkDesignPage;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(userQueryKey.menuBookmarks());

  return {
    props: {
      dehydratedstate: dehydrate(queryClient),
    },
  };
}

BookmarkDesignPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SingleNavbar text="북마크" />
      {page}
      <GNB />
    </>
  );
};
