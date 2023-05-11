import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { IMenuListItem, IStoreListItem, IStoreMenuListItem } from "@/types/api";
import { useGetMenuBookmarkList, useGetStoreBookmarkList } from "@/hooks/queries/user";
import { useDeleteMenuBookmark, usePostMenuBookmark } from "@/hooks/queries/menu";
import { useDeleteStoreBookmark, usePostStoreBookmark } from "@/hooks/queries/store";
import { checkAuth } from "@/utils/util";
import Icon from "../Icon/Icon";
import * as S from "./Bookmark.styled";

interface IProps {
  type: "store" | "menu";
  data: IStoreListItem | IMenuListItem | IStoreMenuListItem;
}

function Bookmark({ type, data }: IProps) {
  const { colors } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { data: menuBookmarkData } = useGetMenuBookmarkList();
  const { data: storeBookmarkData } = useGetStoreBookmarkList();
  const { mutate: addMenuBookmark } = usePostMenuBookmark();
  const { mutate: addStoreBookmark } = usePostStoreBookmark();
  const { mutate: deleteMenuBookmark } = useDeleteMenuBookmark();
  const { mutate: deleteStoreBookmark } = useDeleteStoreBookmark();

  useEffect(() => {
    if (type === "store") {
      if (storeBookmarkData?.data.some(store => store.id === data.id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }

    if (type === "menu") {
      if (menuBookmarkData?.data.some(menu => menu.id === data.id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }
  }, [menuBookmarkData, storeBookmarkData, data, type]);

  const handleBookmark = (e: React.MouseEvent<HTMLButtonElement>, targetId: number) => {
    e.preventDefault();
    e.stopPropagation();

    checkAuth();

    if (type === "store") {
      if (isBookmarked) {
        deleteStoreBookmark(targetId);
      } else {
        addStoreBookmark(targetId);
      }
    } else if (type === "menu") {
      if (isBookmarked) {
        deleteMenuBookmark(targetId);
      } else {
        addMenuBookmark(targetId);
      }
    }
  };

  return (
    <S.BookmarkIconWrap onClick={e => handleBookmark(e, data.id)}>
      <Icon
        name="saveBookmark"
        size="m"
        fill={isBookmarked ? colors.pink[700] : colors.grey[400]}
        color={isBookmarked ? colors.pink[700] : colors.grey[400]}
      />
    </S.BookmarkIconWrap>
  );
}

export default Bookmark;
