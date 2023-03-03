import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Theme, css } from "@emotion/react";
import Carousel from "@/components/shared/Carousel/Carousel";
import { IReviewItem } from "@/api/types/review";
import Like from "assets/icons/like.svg";
import Heart from "assets/icons/heart.svg";
import ArrowDown from "assets/icons/arrow-down.svg";
import ArrowUp from "assets/icons/arrow-up.svg";
import * as S from "./Review.styled";
import Tag from "../../../shared/Tag/Tag";

export interface IProp {
  review: IReviewItem;
}

const VIP = "단골";

export default function Review({ review }: IProp) {
  const [isOpened, setIsOpened] = useState(false);
  const { asPath } = useRouter();
  const isAllPage = asPath.split("/").slice(-1)[0] === "all";
  const currentPath = isAllPage
    ? asPath
        .split("/")
        .slice(0, asPath.split("/").length - 1)
        .join("/")
    : asPath;

  const handleIsOpened = () => {
    setIsOpened(() => !isOpened);
  };

  return (
    <Link
      href={{
        pathname: `${currentPath}/${review.id}/image`,
        query: { images: JSON.stringify(review.reviewImages) },
      }}
    >
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
    </Link>
  );
}
