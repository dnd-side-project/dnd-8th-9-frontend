/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetStoreReviews } from "@/hooks/queries/store";
import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import CountTitle from "@/components/store/review/CountTitle/CountTitle";
import * as S from "./images.styled";

const IMAGES = "이미지";

export default function ImagesPage() {
  const {
    asPath,
    query: { storeId },
  } = useRouter();

  const { data: storeReviewsData, isLoading, isError } = useGetStoreReviews(Number(storeId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const reviewImages = storeReviewsData.data.map(review => review.reviewImages).flat();

  return (
    <S.Container>
      <CountTitle tag={IMAGES} count={reviewImages.length} />
      <S.Images>
        {reviewImages.map((image, idx) => (
          <ImageWrap key={idx} percent={32} borderRadius={4}>
            <Link href={`${asPath}/${image.id}`}>
              <Image src={image.url} width={108} height={106} alt={IMAGES} />
            </Link>
          </ImageWrap>
        ))}
      </S.Images>
    </S.Container>
  );
}
