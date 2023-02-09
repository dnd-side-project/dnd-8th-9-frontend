import * as S from "./InfoTable.styled";

interface IContents {
  data: { key: string; value: string }[];
}

export default function InfoTable({ data }: IContents) {
  return (
    <>
      {data.map(el => (
        <S.Container key={el.key}>
          <S.CellKey>{el.key}</S.CellKey>
          <S.CellValue>{el.value}</S.CellValue>
        </S.Container>
      ))}
    </>
  );
}
