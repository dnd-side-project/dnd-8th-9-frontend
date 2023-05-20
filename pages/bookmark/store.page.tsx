import { ReactElement, useState } from "react";
import { useTheme } from "@emotion/react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { resultTab } from "@/constants/tabs";
import { userQueryKey } from "@/constants/queryKey";
import useBookmarkStore from "@/store/bookmark";
import { useGetStoreBookmarkList } from "@/hooks/queries/user";

import Text from "@/components/shared/Text/Text";
import Button from "@/components/shared/Button/Button";
import StoreDoubleCard from "@/components/shared/Card/StoreDoubleCard";
import FilterBar from "@/components/shared/FilterBar/FilterBar";
import SingleNavbar from "@/components/shared/Navbar/SingleNavbar";
import GNB from "@/components/shared/GNB/GNB";
import FilterModal from "@/components/shared/FilterModal/FilterModal";
import * as S from "./menu.styled";

function BookmarkStorePage() {
  const { colors } = useTheme();
  const [isEditMode, setIsEditMode] = useState(false);
  const { editBookmarkList, deleteAllStoreBookmarkList, clearEditBookmarkList } =
    useBookmarkStore();
  const { data: storeBookmarkList, isLoading, isError } = useGetStoreBookmarkList();

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
        {storeBookmarkList.data.map(store => (
          <StoreDoubleCard key={store.id} data={store} mode={isEditMode ? "edit" : "none"} />
        ))}
      </S.StoreWrap>
      <FilterModal />
    </div>
  );
}

export default BookmarkStorePage;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(userQueryKey.storeBookmarks());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

BookmarkStorePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <SingleNavbar text="북마크" />
      {page}
      <GNB />
    </>
  );
};
