/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useGetStoreReviews } from "@/hooks/queries/store";
import useModalStore from "@/store/modal";
import { IImage } from "@/types/api";

import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import CountTitle from "@/components/store/review/CountTitle/CountTitle";
import ReviewImageModal from "@/components/store/ReviewImageModal/ReviewImageModal";
import * as S from "./images.styled";

const IMAGES = "이미지";

export default function ImagesPage() {
  const {
    query: { storeId },
  } = useRouter();

  const [clickedImageId, setClickedImageId] = useState(0);

  const { reviewModalOpen, toggleReviewModal } = useModalStore();
  const { data: storeReviewsData, isLoading, isError } = useGetStoreReviews(Number(storeId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const reviewImages = storeReviewsData.data.map(review => review.reviewImages).flat();

  const handleClick = (targetImage: IImage, currentIdx: number) => {
    setClickedImageId(currentIdx);
    toggleReviewModal();
  };

  return (
    <S.Container>
      <CountTitle tag={IMAGES} count={reviewImages.length} />
      <S.Images>
        {reviewImages.map((image, idx) => (
          <ImageWrap key={idx} percent={32} borderRadius={4}>
            <button onClick={() => handleClick(image, idx)}>
              <Image src={image.url} width={108} height={106} alt={IMAGES} />
            </button>
          </ImageWrap>
        ))}
      </S.Images>
      {reviewModalOpen && <ReviewImageModal data={reviewImages} imageId={clickedImageId} />}
    </S.Container>
  );
}
