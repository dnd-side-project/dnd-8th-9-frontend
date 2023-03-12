import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper";
import * as S from "./Carousel.styled";

export interface IProp {
  bulletMargin?: string;
  images: {
    id: number;
    url: string;
  }[];
}

export default function Carousel({ images, bulletMargin = "1.2rem" }: IProp) {
  return (
    <S.Container bulletMargin={bulletMargin}>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
        {images.map(image => (
          <SwiperSlide key={image.id} style={{ textAlign: "center" }}>
            <S.ImageWrap>
              <Image alt={image.url} src={image.url} fill />
            </S.ImageWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
