/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { IReviewListItemSpecific } from "@/mocks/mockData/randomReviewList";
import { useGetStoreReviews } from "@/hooks/queries/store";
import { useGetReviewDetails } from "@/hooks/queries/review";
import useModalStore from "@/store/modal";
import { IImage } from "@/types/api";

import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import CountTitle from "@/components/store/review/CountTitle/CountTitle";
import Modal from "@/components/shared/Modal/Modal";
import Text from "@/components/shared/Text/Text";
import Nickname from "@/components/shared/Nickname/Nickname";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./images.styled";

const IMAGES = "이미지";
const NICKNAME_MOCK = "도티";
const DANGOL_MOCK = true;

export default function ImagesPage() {
  const { colors } = useTheme();
  const {
    query: { storeId },
  } = useRouter();

  const [currentImageId, setCurrentImageId] = useState(0);
  const [currentImage, setCurrentImage] = useState<IImage | null>(null);

  const { reviewModalOpen, toggleReviewModal } = useModalStore();
  const { data: storeReviewsData, isLoading, isError } = useGetStoreReviews(Number(storeId));
  const { data: reviewDetailsData } = useGetReviewDetails(Number(currentImage?.targetId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const reviewImages = storeReviewsData.data.map(review => review.reviewImages).flat();

  const handleClick = (targetImage: IImage, currentIdx: number) => {
    setCurrentImageId(currentIdx);
    setCurrentImage(targetImage);
    toggleReviewModal();
  };

  const updateIndex = (swiperInstance: SwiperType) => {
    if (swiperInstance === null) return;
    const activeIndex = swiperInstance?.activeIndex;
    setCurrentImageId(activeIndex);
    setCurrentImage(reviewImages[activeIndex]);
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
      {reviewModalOpen && (
        <Modal>
          <>
            <S.IconWrap onClick={() => toggleReviewModal()}>
              <Icon name="close" color={colors.grey[100]} size="s" />
            </S.IconWrap>
            <Swiper
              navigation
              modules={[Navigation]}
              initialSlide={Number(currentImageId)}
              className="mySwiper"
              onActiveIndexChange={updateIndex}
            >
              {reviewImages.map((image: IImage, imgIdx: number) => (
                <SwiperSlide key={imgIdx}>
                  <S.Content>
                    <S.NicknameWrap>
                      <Nickname
                        name={
                          (reviewDetailsData?.data as IReviewListItemSpecific)?.nickname ||
                          NICKNAME_MOCK
                        }
                        dangol={
                          (reviewDetailsData?.data as IReviewListItemSpecific)?.reorder ||
                          DANGOL_MOCK
                        }
                        color={colors.grey[100]}
                      />
                      <button>
                        <Text color={colors.grey[400]} weight={500} size={13}>
                          본문보기
                        </Text>
                      </button>
                    </S.NicknameWrap>
                    <S.ImageWrap>
                      <Image src={image.url} alt="review" fill />
                    </S.ImageWrap>
                    <S.TextWrap>
                      <Text color={colors.grey[400]} weight={500}>
                        옵션: {reviewDetailsData?.data.menuName}
                      </Text>
                      <Text as="p" color={colors.grey[100]}>
                        {reviewDetailsData?.data.content}
                      </Text>
                    </S.TextWrap>
                  </S.Content>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </Modal>
      )}
    </S.Container>
  );
}
