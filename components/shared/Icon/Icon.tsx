import { ICONS } from "./Icon.constant";
import * as S from "./Icon.styled";

interface IProp {
  size?: "xs" | "s" | "m" | "l";
  name: string;
  color?: string;
  fill?: string;
  className?: string;
}

function Icon({ size = "s", name, color = "none", fill = "none", className }: IProp) {
  return (
    <S.IconWrap size={size} color={color} fill={fill} className={className}>
      {ICONS[name]}
    </S.IconWrap>
  );
}

export default Icon;
