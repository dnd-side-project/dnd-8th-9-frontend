/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { useGetReviewDetails } from "@/hooks/queries/review";
import useModalStore from "@/store/modal";
import { IImage } from "@/types/api";

import Modal from "@/components/shared/Modal/Modal";
import Text from "@/components/shared/Text/Text";
import Nickname from "@/components/shared/Nickname/Nickname";
import * as S from "./ReviewImageModal.styled";

interface IProps {
  data: IImage[];
  imageId: number;
}

function ReviewModal({ data, imageId }: IProps) {
  const { colors } = useTheme();
  const [currentImageId, setCurrentImageId] = useState(imageId);
  const [currentImage, setCurrentImage] = useState<IImage>(data[imageId]);

  const { toggleReviewModal } = useModalStore();
  const {
    data: reviewDetailsData,
    isLoading,
    isError,
  } = useGetReviewDetails(Number(currentImage.targetId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const { menuName, content, nickname, reorder, profileImage } = reviewDetailsData.data;

  const updateIndex = (swiperInstance: SwiperType) => {
    if (swiperInstance === null) return;
    const activeIndex = swiperInstance?.activeIndex;
    setCurrentImageId(activeIndex);
    setCurrentImage(data[activeIndex]);
  };

  return (
    <Modal opacity={false} closeModal={toggleReviewModal}>
      <S.ModalContentWrap>
        <Swiper
          navigation
          modules={[Navigation]}
          initialSlide={Number(currentImageId)}
          className="mySwiper"
          onActiveIndexChange={updateIndex}
        >
          {data.map((image: IImage, imgIdx: number) => (
            <SwiperSlide key={imgIdx}>
              <S.Content>
                <S.NicknameWrap>
                  <Nickname
                    name={nickname}
                    dangol={reorder}
                    color={colors.grey[100]}
                    profileImage={profileImage}
                  />
                  <Text as="button" color={colors.grey[400]} weight={500} size={13}>
                    본문보기
                  </Text>
                </S.NicknameWrap>
                <S.ImageWrap>
                  <Image src={image.url} alt="review" fill />
                </S.ImageWrap>
                <S.TextWrap>
                  <Text color={colors.grey[400]} weight={500}>
                    옵션: {menuName}
                  </Text>
                  <Text as="p" color={colors.grey[100]}>
                    {content}
                  </Text>
                </S.TextWrap>
              </S.Content>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.ModalContentWrap>
    </Modal>
  );
}

export default ReviewModal;
