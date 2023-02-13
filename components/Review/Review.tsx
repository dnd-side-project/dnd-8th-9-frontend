import Carousel from "@/components/Carousel/Carousel";
import Heart from "assets/icons/heart.svg";
import * as S from "./review.styled";

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

export default function Review({ review }: IReview) {
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
