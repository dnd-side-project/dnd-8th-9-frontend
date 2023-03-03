import Image from "next/image";
import { useState, useEffect } from "react";
import { IStoreItem } from "@/api/types/storeList";
import { IRandomMenuItem } from "@/api/types/randomMenuList";
import useBookmarkStore from "@/store/bookmark";
import { useTheme } from "@emotion/react";
import { IImage } from "@/api/types/shared";
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
  isEditMode?: boolean;
  bookmarkData: IStoreItem | IRandomMenuItem;
  type: "store" | "menu";
}

function CardImage({
  data,
  canDelivery,
  canPickup,
  rank = 0,
  isEditMode = false,
  bookmarkData,
  type,
}: IProp) {
  const { colors } = useTheme();
  const isCarousel = Array.isArray(data);
  const { updateBookmarkStoreList, updateBookmarkMenuList, bookmarkMenuList, bookmarkStoreList } =
    useBookmarkStore();
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

  const handleBookmark = (newBookmarkData: IStoreItem | IRandomMenuItem) => {
    if (type === "store") {
      updateBookmarkStoreList(newBookmarkData as IStoreItem);
    } else if (type === "menu") {
      updateBookmarkMenuList(newBookmarkData as IRandomMenuItem);
    }
  };

  return (
    <>
      {isCarousel ? <Carousel images={data} /> : <Image src={data} alt="menu" fill />}
      {isEditMode ? (
        <S.CheckIconWrap>
          <Icon name="check" size="m" color={colors.grey[400]} />
        </S.CheckIconWrap>
      ) : (
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
