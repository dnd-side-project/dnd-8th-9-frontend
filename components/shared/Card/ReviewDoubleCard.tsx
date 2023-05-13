import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { IReviewListItem } from "@/types/api";
import { Quote } from "@/assets/icons";
import { IMAGE_MOCK } from "@/constants/api";

import Dangdo from "../Dangdo/Dangdo";
import Nickname from "../Nickname/Nickname";
import Tag from "../Tag/Tag";
import Text from "../Text/Text";
import * as S from "./Card.styled";
import ReviewTag from "../Tag/common/ReviewTag";

interface IProps {
  data: IReviewListItem;
}

function ReviewDoubleCard({ data }: IProps) {
  const { colors } = useTheme();
  const {
    reorder,
    dangdo,
    reviewImages,
    goodPoint,
    menuName,
    content,
    nickname,
    storeId,
    storeName,
  } = data;

  return (
    <Link href={`/store/${storeId}/review`}>
      <S.ContentWrap type="reviewDouble">
        <Nickname name={nickname} dangol={reorder} />
        <S.Review>
          <Dangdo dangdo={dangdo} />
          <ReviewTag goodPoint={goodPoint} />
        </S.Review>
        <S.InfoWrap>
          <Text weight={500} size={11} color={colors.grey[800]}>
            {storeName}
          </Text>
          <Text weight={500} size={11} color={colors.grey[700]}>
            {menuName}
          </Text>
        </S.InfoWrap>
      </S.ContentWrap>
      <S.ReviewImageWrap>
        <Image src={!reviewImages?.length ? IMAGE_MOCK : reviewImages[0].url} alt="review" fill />
      </S.ReviewImageWrap>
      <S.ReviewContent>
        <Quote className="icon" />
        <S.ReviewText weight={400} size={13}>
          {content}
        </S.ReviewText>
      </S.ReviewContent>
    </Link>
  );
}

export default ReviewDoubleCard;
