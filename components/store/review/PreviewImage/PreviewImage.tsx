import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@emotion/react";

import { IImage } from "@/types/api/shared";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
import * as S from "./PreviewImage.styled";

interface IReviewImages {
  reviewImages: IImage[];
}

export default function PreviewImage({ reviewImages }: IReviewImages) {
  const { asPath } = useRouter();
  const { colors } = useTheme();

  const previewImages = reviewImages.slice(0, 4);

  return (
    <S.Container>
      <S.Title as="p" size={16} weight={600}>
        사진 <strong>{reviewImages.length}</strong>건
      </S.Title>
      <S.PreviewImages>
        {previewImages.map((image, idx) => (
          <S.ImageWrap key={image.id}>
            <Link href={`${asPath}/images/${image.targetId}`}>
              <Image src={image.url} alt="review" fill />
            </Link>
            {idx === previewImages.length - 1 && (
              <Link href={`${asPath}/images`}>
                <S.ShowMore>
                  <Text size={12} weight={500} color={colors.grey[100]}>
                    더보기
                  </Text>
                  <Icon name="arrowRight" size="xs" color={colors.grey[100]} />
                </S.ShowMore>
              </Link>
            )}
          </S.ImageWrap>
        ))}
      </S.PreviewImages>
    </S.Container>
  );
}
