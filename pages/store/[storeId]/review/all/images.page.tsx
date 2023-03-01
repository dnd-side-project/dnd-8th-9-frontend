/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import { reviews } from "@/mocks/mockData/review"; // TODO: 나중에 바꿔야 함
import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import CountTitle from "@/components/store/review/CountTitle/CountTitle";
import * as S from "./images.styled";

const IMAGES = "이미지";

export default function ImagesPage() {
  const reviewImages = reviews.reviewList.map(review => review.reviewImages).flat();

  return (
    <S.Container>
      <CountTitle tag={IMAGES} count={reviewImages.length} />
      <S.Images>
        {reviewImages.map((image, idx) => (
          // eslint-disable-next-line react/jsx-key
          <ImageWrap key={idx} percent={32} borderRadius={4}>
            <Image src={image.url} width={108} height={106} alt={IMAGES} />
          </ImageWrap>
        ))}
      </S.Images>
    </S.Container>
  );
}
