/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from "next/router";
import Carousel from "@/components/shared/Carousel/Carousel";
import * as S from "./image.styled";

export default function ImagePage() {
  const router = useRouter();
  const { images } = router.query;

  return (
    <S.Container>
      <S.CarouselWrapper>
        <Carousel images={JSON.parse(images as string)} />
      </S.CarouselWrapper>
    </S.Container>
  );
}
