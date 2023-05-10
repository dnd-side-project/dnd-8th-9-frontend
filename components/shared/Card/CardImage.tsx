import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";

import useBookmarkStore from "@/store/bookmark";
import {
  IStoreListItem,
  IMenuDetails,
  IMenuListItem,
  IImage,
  IStoreMenuListItem,
} from "@/types/api";

import Carousel from "../Carousel/Carousel";
import Icon from "../Icon/Icon";
import Tag from "../Tag/Tag";
import Text from "../Text/Text";
import * as S from "./CardImage.styled";

interface IProp {
  data: IImage[] | string;
  rank?: number;
  canDelivery?: boolean;
  canPickup?: boolean;
  mode?: "edit" | "none" | "bookmark";
  bookmarkData: IStoreListItem | IMenuDetails | IMenuListItem | IStoreMenuListItem;
  type: "store" | "menu";
}

function CardImage({
  data,
  canDelivery,
  canPickup,
  rank = 0,
  mode = "bookmark",
  bookmarkData,
  type,
}: IProp) {
  const { colors } = useTheme();
  const isCarousel = Array.isArray(data);
  const {
    updateBookmarkStoreList,
    updateBookmarkMenuList,
    updateEditBookmarkList,
    bookmarkMenuList,
    bookmarkStoreList,
    editBookmarkList,
  } = useBookmarkStore();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (type === "store") {
      if (bookmarkStoreList.some(store => store.id === bookmarkData.id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }

    if (type === "menu") {
      if (bookmarkMenuList.some(menu => menu.id === bookmarkData.id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }
  }, [bookmarkStoreList, bookmarkMenuList, bookmarkData, type]);

  const handleBookmark = (
    e: React.MouseEvent<HTMLButtonElement>,
    newBookmarkData: IStoreListItem | IMenuDetails | IMenuListItem | IStoreMenuListItem,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (type === "store") {
      updateBookmarkStoreList(newBookmarkData as IStoreListItem);
    } else if (type === "menu") {
      updateBookmarkMenuList(newBookmarkData as IMenuListItem);
    }
  };

  const handleCheck = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    updateEditBookmarkList(name);
  };

  return (
    <>
      {isCarousel ? <Carousel images={data} /> : <Image src={data} alt="menu" fill />}
      {mode === "edit" && (
        <S.CheckIconWrap
          onClick={e => handleCheck(e, bookmarkData.name)}
          className={editBookmarkList.includes(bookmarkData.name) ? "isSelected" : ""}
        >
          <Icon
            name="check"
            size="m"
            color={
              editBookmarkList.includes(bookmarkData.name) ? colors.grey[100] : colors.grey[400]
            }
          />
        </S.CheckIconWrap>
      )}
      {mode === "bookmark" && (
        <S.BookmarkIconWrap onClick={e => handleBookmark(e, bookmarkData)}>
          <Icon
            name="saveBookmark"
            size="m"
            fill={isBookmarked ? colors.pink[700] : colors.grey[400]}
            color={isBookmarked ? colors.pink[700] : colors.grey[400]}
          />
        </S.BookmarkIconWrap>
        // <Bookmark type={type} data={bookmarkData} />
      )}
      <S.TagsWrap>
        {canDelivery && (
          <Tag type="icon" label="택배가능">
            <Icon name="delivery" size="xs" fill={colors.grey[100]} color={colors.grey[100]} />
            <Text weight={500} size={12} color={colors.grey[100]}>
              택배
            </Text>
          </Tag>
        )}
        {canPickup && (
          <Tag type="icon" label="픽업가능">
            <Icon name="store" size="xs" fill={colors.grey[100]} color={colors.grey[100]} />
            <Text weight={500} size={12} color={colors.grey[100]}>
              픽업
            </Text>
          </Tag>
        )}
      </S.TagsWrap>
      {rank && (
        <S.RankBadge>
          <S.RankNumber weight={700} size={12} color={colors.grey[100]}>
            {String(rank)}
          </S.RankNumber>
        </S.RankBadge>
      )}
    </>
  );
}

export default CardImage;
