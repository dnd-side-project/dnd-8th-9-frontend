import { useTheme } from "@emotion/react";
import Icon from "../Icon/Icon";
import * as S from "./Dangdo.styled";

interface IProp {
  size?: "s" | "m" | "l";
  dangdo: number;
}

function Dangdo({ size = "s", dangdo }: IProp) {
  const { colors } = useTheme();

  return (
    <S.Container size={size}>
      <Icon name="heart" size={size} />
      <S.Percent color={colors.grey[900]}>
        {size === "l" ? "당도 " : ""}
        {String(dangdo)}%
      </S.Percent>
    </S.Container>
  );
}

export default Dangdo;
