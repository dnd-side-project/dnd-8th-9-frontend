import * as S from "./Text.styled";

interface IProp {
  children: string[] | string | React.ReactNode;
  size?: number;
  weight?: number;
  color?: string;
  className?: string;
  as?: React.ElementType;
}

function Text({ children, size = 14, weight = 400, color = "black", className, as }: IProp) {
  return (
    <S.Text as={as} className={className} size={size} weight={weight} color={color}>
      {children}
    </S.Text>
  );
}

export default Text;
