import React, { useState } from "react";
import Image from "next/image";
import { Theme, css } from "@emotion/react";
import Carousel from "@/components/shared/Carousel/Carousel";
import Like from "assets/icons/like.svg";
import Heart from "assets/icons/heart.svg";
import ArrowDown from "assets/icons/arrow-down.svg";
import ArrowUp from "assets/icons/arrow-up.svg";
import * as S from "./Review.styled";
import Tag from "../../../shared/Tag/Tag";

export interface IReview {
  review: {
    nickname: string;
    profileImage: string;
    source: string;
    rating: string;
    menuOption: string;
    reviewOption: string;
    text: string;
    date: string;
    reviewImages: {
      id: number;
      url: string;
    }[];
    likes: number;
  };
}

const VIP = "단골";

export default function Review({ review }: IReview) {
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => {
    setIsOpened(() => !isOpened);
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderLeft>
          <S.NickNameSite>
            <Image src={review.profileImage} width={50} height={50} alt="profile" />
            <S.NickName>{review.nickname}</S.NickName>
            <S.Source>
              {review.source === VIP ? (
                <Tag
                  type="square"
                  label="vip"
                  cssProp={css`
                    height: 1.7rem;
                  `}
                >
                  {VIP}
                </Tag>
              ) : (
                review.source
              )}
            </S.Source>
          </S.NickNameSite>
          <S.Option>옵션: {review.menuOption}</S.Option>
        </S.HeaderLeft>
        {/* TODO: 시간 포맷 변경 */}
        <S.HeaderRight>{review.date}</S.HeaderRight>
      </S.Header>
      <S.CarouselWrapper>
        <Carousel images={review.reviewImages} />
      </S.CarouselWrapper>
      <S.Taste>
        <Heart height={10} width={10} viewBox="0 0 15 15" fill="red" />
        당도 {review.rating}%
        <span>
          <Tag type="single" label="delicious">
            {review.reviewOption}
          </Tag>
        </span>
      </S.Taste>
      <S.Text isOpened={isOpened}>{review.text}</S.Text>
      <S.Arrow>
        {isOpened ? (
          <ArrowUp onClick={handleIsOpened} width={18} height={18} />
        ) : (
          <ArrowDown onClick={handleIsOpened} width={18} height={18} />
        )}
      </S.Arrow>
      <S.LikeButton>
        <Tag
          type="single"
          label="delicious"
          cssProp={({ colors }: Theme) => css`
            color: ${colors.gray[200]};
            border-color: ${colors.gray[100]};
          `}
        >
          <>
            <Like fill="#d9d9d9" />
            {review.likes}
          </>
        </Tag>
      </S.LikeButton>
    </S.Container>
  );
}
