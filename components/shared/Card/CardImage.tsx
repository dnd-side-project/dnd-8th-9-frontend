import Image from "next/image";
import { useTheme } from "@emotion/react";
import useBookmarkStore from "@/store/bookmark";
import { IStoreListItem, IMenuListItem, IImage, IStoreMenuListItem } from "@/types/api";

import Carousel from "../Carousel/Carousel";
import Bookmark from "../Bookmark/Bookmark";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./CardImage.styled";

interface IProp {
  data: IImage[] | string;
  rank?: number;
  canDelivery?: boolean;
  canPickup?: boolean;
  mode?: "edit" | "none" | "bookmark";
  bookmarkData: IStoreListItem | IMenuListItem | IStoreMenuListItem;
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
  const { updateEditBookmarkList, editBookmarkList } = useBookmarkStore();

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
      {mode === "bookmark" && <Bookmark type={type} targetId={bookmarkData.id} />}
      <S.TagsWrap>
        {canDelivery && (
          <S.IconTag type="icon" label="택배가능">
            <Icon name="delivery" size="xs" fill={colors.grey[100]} color={colors.grey[100]} />
            <Text weight={500} size={13} color={colors.grey[100]}>
              택배
            </Text>
          </S.IconTag>
        )}
        {canPickup && (
          <S.IconTag type="icon" label="픽업가능">
            <Icon name="store" size="xs" fill={colors.grey[100]} color={colors.grey[100]} />
            <Text weight={500} size={13} color={colors.grey[100]}>
              픽업
            </Text>
          </S.IconTag>
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
