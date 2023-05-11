import { useState } from "react";
import { useTheme } from "@emotion/react";
import useImageStore from "@/store/image";
import { parseDate } from "@/utils/util";
import { IReviewListItem } from "@/types/api/review";

import Carousel from "@/components/shared/Carousel/Carousel";
import Nickname from "@/components/shared/Nickname/Nickname";
import Text from "@/components/shared/Text/Text";
import Icon from "@/components/shared/Icon/Icon";
import Dangdo from "@/components/shared/Dangdo/Dangdo";
import useModalStore from "@/store/modal";
import * as S from "./Review.styled";

export interface IProp {
  review: IReviewListItem;
}

const DATE = "2021-11-03 11:28:38";

export default function Review({ review }: IProp) {
  const { colors } = useTheme();
  const [isLiked, setIsLiked] = useState(false);

  const { goodPoint, menuName, reviewImages, content, reorder, dangdo, nickname, date } = review;

  const { setImage } = useImageStore();
  const { toggleImageModal } = useModalStore();

  const handleClick = () => {
    setImage(review.reviewImages);
    toggleImageModal();
  };

  const toggleLike = () => {
    setIsLiked(prev => !prev);
  };

  // NOTE: IReviewListItem : date, likes 빠짐
  return (
    <S.Container>
      <S.Header>
        <Nickname name={nickname} dangol={reorder} />
        <Text size={12} color={colors.grey[700]}>
          {parseDate(date || DATE)}
        </Text>
      </S.Header>
      <S.MenuOption as="p" size={13} weight={500} color={colors.grey[800]}>
        옵션: {menuName}
      </S.MenuOption>
      {reviewImages.length > 0 && (
        <S.CarouselWrapper onClick={handleClick}>
          <Carousel images={reviewImages} />
        </S.CarouselWrapper>
      )}
      <S.Rating>
        <Dangdo dangdo={dangdo} size="m" />
        <S.ReviewTag type="single" label="overall review">
          <Text size={13} weight={600} color={colors.pink[700]}>
            {goodPoint}
          </Text>
        </S.ReviewTag>
      </S.Rating>
      <S.ReviewText as="p" size={13} color={colors.grey[800]}>
        {content}
      </S.ReviewText>
      <S.ButtonWrap>
        <S.LikeButton
          onClick={toggleLike}
          type="button"
          label="like"
          shape="round"
          isLiked={isLiked}
        >
          <Icon name="like" size="m" fill={isLiked ? colors.blue[700] : colors.grey[500]} />
          <Text weight={600} color={isLiked ? colors.blue[700] : colors.grey[500]}>
            20
          </Text>
        </S.LikeButton>
      </S.ButtonWrap>
    </S.Container>
  );
}
