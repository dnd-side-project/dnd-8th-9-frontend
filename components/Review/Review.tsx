import Carousel from "@/components/Carousel/Carousel";
import Heart from "assets/icons/heart.svg";
import ArrowDown from "assets/icons/arrow-down.svg";
import ArrowUp from "assets/icons/arrow-up.svg";
import Image from "next/image";
import { useState } from "react";
import * as S from "./Review.styled";

interface IReview {
  review: {
    nickname: string;
    profileImage: string;
    source: string;
    rating: string;
    menuOption: string;
    reviewOption: string;
    text: string;
    time: number;
    reviewImages: {
      id: number;
      url: string;
    }[];
    likes: number;
  };
}

const TIME = "2023-02-13";

export default function Review({ review }: IReview) {
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => {
    setIsOpened(() => !isOpened);
  };

  return (
    <S.Container>
      <S.Review>
        <S.Header>
          <S.HeaderLeft>
            <S.NickNameSite>
              <Image src={review.profileImage} width={50} height={50} alt="profile" />
              <S.NickName>{review.nickname}</S.NickName>
              <S.Source>{review.source}</S.Source>
            </S.NickNameSite>
            <S.Option>옵션: {review.menuOption}</S.Option>
          </S.HeaderLeft>
          {/* TODO: 시간 포맷 변경 */}
          <S.HeaderRight>{TIME}</S.HeaderRight>
        </S.Header>
        <Carousel images={review.reviewImages} />
        <S.Taste>
          {/* TODO: reviweOption 재사용 컴포넌트로 변경 */}
          <Heart height={10} width={10} viewBox="0 0 15 15" fill="red" />
          당도 {review.rating}% {review.reviewOption}
        </S.Taste>
        <S.Text isOpened={isOpened}>{review.text}</S.Text>
        <S.Arrow>
          {isOpened ? (
            <ArrowUp onClick={handleIsOpened} width={18} height={18} />
          ) : (
            <ArrowDown onClick={handleIsOpened} width={18} height={18} />
          )}
        </S.Arrow>
        {/* TODO: 버튼 재사용 컴포넌트로 변경 */}
        <S.LikeButton>{review.likes}</S.LikeButton>
      </S.Review>
    </S.Container>
  );
}
