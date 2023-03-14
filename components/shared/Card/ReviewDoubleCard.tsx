import Image from "next/image";
import { useTheme } from "@emotion/react";
import { IReviewItem } from "@/api/types/review";
import { Quote } from "@/assets/icons";
import Dangdo from "../Dangdo/Dangdo";
import Nickname from "../Nickname/Nickname";
import Tag from "../Tag/Tag";
import Text from "../Text/Text";
import * as S from "./Card.styled";

// NOTE: data 추가필요
const STORE_NAME = "디토케이크";

interface IProps {
  data: IReviewItem;
}

function ReviewDoubleCard({ data }: IProps) {
  const { colors } = useTheme();
  const { nickname, source, rating, reviewImages, reviewOption, menuOption, text } = data;

  return (
    <div>
      <S.ContentWrap type="reviewDouble">
        <Nickname name={nickname} dangol={source === "단골"} />
        <S.Review>
          <Dangdo dangdo={rating} />
          <Tag type="single" label={reviewOption}>
            {reviewOption}
          </Tag>
        </S.Review>
        <S.InfoWrap>
          <Text weight={500} size={11} color={colors.grey[700]}>
            {STORE_NAME}
          </Text>
          <Text weight={500} size={11} color={colors.grey[800]}>
            {menuOption}
          </Text>
        </S.InfoWrap>
      </S.ContentWrap>
      <S.ReviewImageWrap>
        <Image src={reviewImages[0].url} alt="review" fill />
      </S.ReviewImageWrap>
      <S.ReviewContent>
        <Quote className="icon" />
        <S.ReviewText weight={400} size={13}>
          {text}
        </S.ReviewText>
      </S.ReviewContent>
    </div>
  );
}

export default ReviewDoubleCard;
