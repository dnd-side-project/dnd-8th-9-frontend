import { ICONS } from "./Icon.constant";
import * as S from "./Icon.styled";

interface IProp {
  size?: "xs" | "s" | "m" | "l";
  name: string;
  color?: string;
  fill?: string;
}

function Icon({ size = "s", name, color = "none", fill = "none" }: IProp) {
  return (
    <S.IconWrap size={size} color={color} fill={fill}>
      {ICONS[name]}
    </S.IconWrap>
  );
}

export default Icon;
