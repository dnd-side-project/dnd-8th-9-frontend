import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper";
import * as S from "./Carousel.styled";

interface IImages {
  images: {
    id: number;
    url: string;
  }[];
}

export default function Carousel({ images }: IImages) {
  return (
    <S.Container>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
        {images.map(image => (
          <SwiperSlide key={image.id} style={{ textAlign: "center" }}>
            <Image alt={image.url} src={image.url} width={100} height={50} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
