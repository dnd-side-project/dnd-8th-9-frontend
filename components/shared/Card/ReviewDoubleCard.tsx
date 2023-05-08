import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { IReviewListItem } from "@/types/api";
import { Quote } from "@/assets/icons";
import { IReviewListItemSpecific } from "@/mocks/mockData/randomReviewList";

import Dangdo from "../Dangdo/Dangdo";
import Nickname from "../Nickname/Nickname";
import Tag from "../Tag/Tag";
import Text from "../Text/Text";
import * as S from "./Card.styled";

interface IProps {
  data: IReviewListItem | IReviewListItemSpecific;
}

function ReviewDoubleCard({ data }: IProps) {
  const { colors } = useTheme();
  const { reorder, dangdo, reviewImages, goodPoint, menuName, content } = data;

  // NOTE: IReviewListItem: nickname, storeName 빠짐.
  // NOTE: IReviewListItem: nickname, storeId, storeName 포함.

  return (
    <Link href={`/store/${(data as IReviewListItemSpecific).storeId}/review`}>
      <S.ContentWrap type="reviewDouble">
        <Nickname name={(data as IReviewListItemSpecific).nickname || "drake"} dangol={reorder} />
        <S.Review>
          <Dangdo dangdo={dangdo} />
          <Tag type="single" label={goodPoint}>
            {goodPoint}
          </Tag>
        </S.Review>
        <S.InfoWrap>
          <Text weight={500} size={11} color={colors.grey[700]}>
            {(data as IReviewListItemSpecific).storeName || "당도케이크"}
          </Text>
          <Text weight={500} size={11} color={colors.grey[800]}>
            {menuName}
          </Text>
        </S.InfoWrap>
      </S.ContentWrap>
      <S.ReviewImageWrap>
        <Image
          src={!reviewImages?.length ? "https://via.placeholder.com/640x480" : reviewImages[0].url}
          alt="review"
          fill
        />
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
