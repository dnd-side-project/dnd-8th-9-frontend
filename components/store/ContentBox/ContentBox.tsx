import { Info } from "@/assets/icons";
import * as S from "./ContentBox.styled";

interface IProp {
  children: React.ReactNode;
  title: string;
  hasInfoIcon?: boolean;
  className?: string;
  name?: string;
}

function ContentBox({ children, title, name, className, hasInfoIcon = false }: IProp) {
  return (
    <S.Box className={className} id={name}>
      <S.Title as="h2" size={16} weight={600}>
        {title}
        {hasInfoIcon && <Info />}
      </S.Title>
      <div>{children}</div>
    </S.Box>
  );
}

export default ContentBox;
