/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-array-index-key */
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import * as S from "./index.styled";

interface IPreviewImage {
  id: number;
  url: string;
}

export default function PreviewImagePage() {
  const router = useRouter();
  const { reviewImages, idx } = router.query;
  const previewImages = reviewImages !== undefined ? JSON.parse(reviewImages as string) : [];

  return (
    <S.Container>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        initialSlide={Number(idx)}
        className="mySwiper"
      >
        {previewImages.map((image: IPreviewImage, imgIdx: number) => (
          <SwiperSlide key={imgIdx}>
            <img src={image.url} alt={image.url} width="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
