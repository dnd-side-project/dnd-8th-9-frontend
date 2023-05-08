import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";

import useBookmarkStore from "@/store/bookmark";
import { IStoreListItem, IMenuDetails, IMenuListItem, IImage } from "@/types/api";

import { IMenuListItemSimple } from "@/mocks/mockData/menuList";
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
  bookmarkData: IStoreListItem | IMenuDetails | IMenuListItem | IMenuListItemSimple;
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
    newBookmarkData: IStoreListItem | IMenuDetails | IMenuListItem | IMenuListItemSimple,
  ) => {
    console.log("menu bookmark");
    if (type === "store") {
      updateBookmarkStoreList(newBookmarkData as IStoreListItem);
    } else if (type === "menu") {
      updateBookmarkMenuList(newBookmarkData as IMenuListItem);
    }
  };

  const handleCheck = (name: string) => {
    updateEditBookmarkList(name);
  };

  return (
    <>
      {isCarousel ? <Carousel images={data} /> : <Image src={data} alt="menu" fill />}
      {mode === "edit" && (
        <S.CheckIconWrap
          onClick={() => handleCheck(bookmarkData.name)}
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
        <S.BookmarkIconWrap onClick={() => handleBookmark(bookmarkData)}>
          <Icon
            name="saveBookmark"
            size="m"
            fill={isBookmarked ? colors.pink[700] : colors.grey[400]}
            color={isBookmarked ? colors.pink[700] : colors.grey[400]}
          />
        </S.BookmarkIconWrap>
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
