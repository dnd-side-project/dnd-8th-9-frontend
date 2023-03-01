/* eslint-disable @next/next/no-img-element */
import ImageWrap from "@/components/shared/ImageWrap/ImageWrap";
import { useFormMenuStore, useFormSizeDangdoStore } from "@/store/ReviewForm";
import * as S from "./Submitted.styled";

export default function Sumbitted() {
  const { name, menuImage } = useFormMenuStore(state => state);
  const { size } = useFormSizeDangdoStore(state => state);

  const TEXT_TITLE = "리뷰작성이 완료되었어요!";
  const TEXT_DETAIL = `리뷰에 참여해주셔서 감사합니다. \n다른 사용자 분들에게 도움이 될 거예요!`;

  return (
    <S.Container>
      <S.CakeInfo>
        <ImageWrap percent={30} borderRadius={8}>
          <img src={menuImage} alt="menu" className="menu" />
        </ImageWrap>
        <span>{name}</span>
        <p>사이즈: {size}</p>
      </S.CakeInfo>
      <S.Text>
        <span>{TEXT_TITLE}</span>
        <p>{TEXT_DETAIL}</p>
      </S.Text>
    </S.Container>
  );
}
