import * as S from "./ImageWrap.styled";

interface IImageWrap {
  percent: number;
  children: string | JSX.Element | JSX.Element[];
}

export default function ImageWrap({ percent, children }: IImageWrap) {
  return <S.Container percent={percent}>{children}</S.Container>;
}
