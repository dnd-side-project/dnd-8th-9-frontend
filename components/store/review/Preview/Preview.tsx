import Image from "next/image";
import Icon from "@/components/shared/Icon/Icon";
import CountTitle from "../CountTitle/CountTitle";
import * as S from "./Preview.styled";

interface IReviewImages {
  reviewImages: {
    id: number;
    url: string;
  }[];
}

const REVIEW = "리뷰";
const IMAGE = "이미지";
const SHOWMORE = "더보기";

export default function Preview({ reviewImages }: IReviewImages) {
  const previewImages = reviewImages.slice(0, 4);

  return (
    <S.Container>
      <CountTitle tag={REVIEW} count={reviewImages.length} />
      <S.PreviewImages>
        {previewImages.map((image, idx) => (
          <S.ImageWrap key={image.url}>
            <Image src={image.url} width={79} height={79} alt={IMAGE} />
            {idx === previewImages.length - 1 && (
              <S.ShowMore>
                {SHOWMORE} <Icon name="arrowRight" size="xs" color="#fff" />
              </S.ShowMore>
            )}
          </S.ImageWrap>
        ))}
      </S.PreviewImages>
    </S.Container>
  );
}
