import { useTheme } from "@emotion/react";
import { Info } from "@/assets/icons";
import * as S from "./ContentBox.styled";

interface IProp {
  children: React.ReactNode;
  title: string;
  hasInfoIcon?: boolean;
  className?: string;
}

function ContentBox({ children, title, className, hasInfoIcon = false }: IProp) {
  const { colors } = useTheme();
  return (
    <S.Box className={className}>
      <S.Title as="h2" size={16} weight={600} color={colors.grey[900]}>
        {title}
        {hasInfoIcon && <Info />}
      </S.Title>
      <div>{children}</div>
    </S.Box>
  );
}

export default ContentBox;
