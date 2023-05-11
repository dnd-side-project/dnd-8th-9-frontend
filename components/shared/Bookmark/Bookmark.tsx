import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { useGetMenuBookmarkList, useGetStoreBookmarkList } from "@/hooks/queries/user";
import { useDeleteMenuBookmark, usePostMenuBookmark } from "@/hooks/queries/menu";
import { useDeleteStoreBookmark, usePostStoreBookmark } from "@/hooks/queries/store";
import { checkAuth } from "@/utils/util";
import Icon from "../Icon/Icon";
import * as S from "./Bookmark.styled";

interface IProps {
  type: "store" | "menu";
  targetId?: number;
  location?: "nav" | "store" | "card";
}
interface IBookmarkIcon {
  [key: string]: {
    name: "saveBookmark" | "saveBookmarkWide";
    size: "xs" | "s" | "m" | "l";
  };
}

const BOOKMARK_ICON: IBookmarkIcon = {
  card: {
    name: "saveBookmark",
    size: "m",
  },
  nav: {
    name: "saveBookmarkWide",
    size: "l",
  },
  store: {
    name: "saveBookmarkWide",
    size: "m",
  },
};

function Bookmark({ type, targetId, location = "card" }: IProps) {
  const { query } = useRouter();
  const { colors } = useTheme();

  const [id, setId] = useState<number>(targetId || 0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { data: menuBookmarkData } = useGetMenuBookmarkList();
  const { data: storeBookmarkData } = useGetStoreBookmarkList();
  const { mutate: addMenuBookmark } = usePostMenuBookmark();
  const { mutate: addStoreBookmark } = usePostStoreBookmark();
  const { mutate: deleteMenuBookmark } = useDeleteMenuBookmark();
  const { mutate: deleteStoreBookmark } = useDeleteStoreBookmark();

  useEffect(() => {
    if (targetId) return;

    if (type === "store") {
      setId(Number(query?.storeId));
    }

    if (type === "menu") {
      setId(Number(query?.menuId));
    }
  }, [query, type, targetId]);

  useEffect(() => {
    if (type === "store") {
      if (storeBookmarkData?.data.some(store => store.id === id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }

    if (type === "menu") {
      if (menuBookmarkData?.data.some(menu => menu.id === id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }
  }, [menuBookmarkData, storeBookmarkData, id, type]);

  const handleBookmark = (e: React.MouseEvent<HTMLButtonElement>, numId: number) => {
    e.preventDefault();
    e.stopPropagation();

    checkAuth();

    if (type === "store") {
      if (isBookmarked) {
        deleteStoreBookmark(numId);
      } else {
        addStoreBookmark(numId);
      }
    } else if (type === "menu") {
      if (isBookmarked) {
        deleteMenuBookmark(numId);
      } else {
        addMenuBookmark(numId);
      }
    }
  };

  return (
    <S.BookmarkIconWrap
      location={location}
      aria-label="bookmark"
      type="button"
      onClick={e => handleBookmark(e, id)}
    >
      <Icon
        name={BOOKMARK_ICON[location].name}
        size={BOOKMARK_ICON[location].size}
        fill={isBookmarked ? colors.pink[700] : colors.grey[400]}
        color={isBookmarked ? colors.pink[700] : colors.grey[400]}
      />
    </S.BookmarkIconWrap>
  );
}

export default Bookmark;
