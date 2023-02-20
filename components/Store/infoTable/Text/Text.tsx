import * as S from "./Text.styled";

interface IData {
  data: string;
}

export default function Text({ data }: IData) {
  return <S.Container>{data}</S.Container>;
}
