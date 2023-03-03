/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { useRouter } from "next/router";
import useImageStore from "@/store/image";
import Carousel from "@/components/shared/Carousel/Carousel";
import * as S from "./image.styled";

export default function ImagePage() {
  // const router = useRouter();
  const { currentImageSource } = useImageStore();

  return (
    <S.Container>
      <S.CarouselWrapper>
        {/* <Carousel images={JSON.parse(images as string)} /> */}
        {currentImageSource && <Carousel images={currentImageSource} />}
      </S.CarouselWrapper>
    </S.Container>
  );
}
