import { useTheme } from "@emotion/react";
import { IReviewListItem } from "@/types/api";
import Text from "../../Text/Text";
import * as S from "./ReviewTag.styled";

interface IProps {
  goodPoint: IReviewListItem["goodPoint"];
}

function ReviewTag({ goodPoint }: IProps) {
  const { colors } = useTheme();

  return (
    <S.Container type="single" label="overall review">
      <Text size={13} weight={600} color={colors.pink[700]}>
        {goodPoint}
      </Text>
    </S.Container>
  );
}

export default ReviewTag;
