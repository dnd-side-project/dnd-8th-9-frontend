import Icon from "../Icon/Icon";
import * as S from "./Dangdo.styled";

interface IProp {
  size?: "s" | "m" | "l" | "xl";
  dangdo: number;
}

function Dangdo({ size = "s", dangdo }: IProp) {
  return (
    <S.Container size={size}>
      <Icon name="heart" size={size === "xl" ? "l" : size} />
      <S.Percent>
        {size === "l" ? "당도 " : ""}
        {String(dangdo)}%
      </S.Percent>
    </S.Container>
  );
}

export default Dangdo;
