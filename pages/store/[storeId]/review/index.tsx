import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import Heart from "assets/icons/heart.svg";
import { reviews } from "@/mocks/mockData/review"; // TODO: msw에서 받아와야 함
import * as S from "./review.styled";

function ReviewPage() {
  const review = reviews.reviewList[0];

  return (
    <S.Container>
      <S.Review>
        <S.Header>
          <S.HeaderLeft>
            <S.NickNameSite>
              <S.NickName>{review.nickname}</S.NickName>
              <S.Source>{review.source}</S.Source>
            </S.NickNameSite>
            <S.Taste>
              <Heart height={10} width={10} viewBox="0 0 15 15" />
              당도 {review.rating}% {review.reviewOption}
            </S.Taste>
            <S.Option>옵션: {review.menuOption}</S.Option>
          </S.HeaderLeft>
          {/* TODO: 시간 포맷 변경 */}
          <S.HeaderRight>{review.time}</S.HeaderRight>
        </S.Header>
        <Carousel images={review.reviewImages} />
        <S.Text>{review.text}</S.Text>
        {/* TODO: 버튼 재사용 컴포넌트로 변경 */}
        <S.LikeButton>{review.likes}</S.LikeButton>
      </S.Review>
    </S.Container>
  );
}

export default ReviewPage;
