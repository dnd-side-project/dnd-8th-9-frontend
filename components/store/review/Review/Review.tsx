import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import useImageStore from "@/store/image";
import { parseDate } from "@/utils/util";
import { IReviewItem } from "@/api/types/review";
import Carousel from "@/components/shared/Carousel/Carousel";
import Nickname from "@/components/shared/Nickname/Nickname";
import Text from "@/components/shared/Text/Text";
import Icon from "@/components/shared/Icon/Icon";
import Dangdo from "@/components/shared/Dangdo/Dangdo";
import * as S from "./Review.styled";

export interface IProp {
  review: IReviewItem;
}

export default function Review({ review }: IProp) {
  const { colors } = useTheme();
  const { asPath } = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  const { setImage } = useImageStore();

  const handleClick = () => {
    setImage(review.reviewImages);
  };

  const toggleLike = () => {
    setIsLiked(prev => !prev);
  };

  return (
    <Link
      href={{
        pathname: `${asPath}/${review.id}/image`,
        // query: { images: JSON.stringify(review.reviewImages) },
      }}
      onClick={handleClick}
    >
      <S.Container>
        <S.Header>
          <Nickname name={review.nickname} dangol={review.source === "단골"} />
          <Text size={12} color={colors.grey[700]}>
            {parseDate(review.date)}
          </Text>
        </S.Header>
        <S.MenuOption as="p" size={13} weight={500} color={colors.grey[800]}>
          옵션: {review.menuOption}
        </S.MenuOption>
        {review.reviewImages.length > 0 && (
          <S.CarouselWrapper>
            <Carousel images={review.reviewImages} />
          </S.CarouselWrapper>
        )}
        <S.Rating>
          <Dangdo dangdo={review.rating} size="m" />
          <S.ReviewTag type="single" label="overall review">
            <Text size={13} weight={600} color={colors.pink[700]}>
              {review.reviewOption}
            </Text>
          </S.ReviewTag>
        </S.Rating>
        <S.ReviewText as="p" size={13} color={colors.grey[800]}>
          {review.text}
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
              {review.likes}
            </Text>
          </S.LikeButton>
        </S.ButtonWrap>
      </S.Container>
    </Link>
  );
}
