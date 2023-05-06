import Image from "next/image";
import { useTheme } from "@emotion/react";
import { IReviewListItem } from "@/types/api";
import { Quote } from "@/assets/icons";
import Dangdo from "../Dangdo/Dangdo";
import Nickname from "../Nickname/Nickname";
import Tag from "../Tag/Tag";
import Text from "../Text/Text";
import * as S from "./Card.styled";

// NOTE: data 추가필요
const STORE_NAME = "디토케이크";

interface IProps {
  data: IReviewListItem;
}

function ReviewDoubleCard({ data }: IProps) {
  const { colors } = useTheme();
  const { reorder, dangdo, reviewImages, goodPoint, menuName, content } = data;

  // NOTE: nickname name prop currently hard coded
  return (
    <div>
      <S.ContentWrap type="reviewDouble">
        <Nickname name="drake" dangol={reorder} />
        <S.Review>
          <Dangdo dangdo={dangdo} />
          <Tag type="single" label={goodPoint}>
            {goodPoint}
          </Tag>
        </S.Review>
        <S.InfoWrap>
          <Text weight={500} size={11} color={colors.grey[700]}>
            {STORE_NAME}
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
    </div>
  );
}

export default ReviewDoubleCard;
