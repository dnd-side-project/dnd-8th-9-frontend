import * as S from "./CountTitle.styled";

interface ICountTitle {
  tag: string;
  count: number;
}

export default function CountTitle({ tag, count }: ICountTitle) {
  return (
    <S.CountTitle>
      {tag} <span>{count}</span>건
    </S.CountTitle>
  );
}
