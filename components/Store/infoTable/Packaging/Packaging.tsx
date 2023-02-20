import TextBox from "../TextBox/TextBox";
import * as S from "./Packaging.styled";

interface IPackaging {
  title: string;
  data: {
    name: string;
    value: string[];
  }[];
}

export default function Packaging({ title, data }: IPackaging) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {data.map(el => (
        <TextBox key={el.name} data={el} />
      ))}
    </S.Container>
  );
}
