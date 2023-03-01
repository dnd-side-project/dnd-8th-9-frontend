import * as S from "./ImageWrap.styled";

interface IImageWrap {
  percent: number;
  borderRadius: number;
  children: string | JSX.Element | JSX.Element[];
}

export default function ImageWrap({ percent, borderRadius, children }: IImageWrap) {
  return (
    <S.Container percent={percent} borderRadius={borderRadius}>
      {children}
    </S.Container>
  );
}
