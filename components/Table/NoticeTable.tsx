import * as S from "./NoticeTable.styled";

interface IContents {
  data: { day: string; hour: string }[];
}

export default function NoticeTable({ data }: IContents) {
  return (
    <>
      {data.map(el => (
        <S.Container key={el.day}>
          <S.Cell>{el.day}</S.Cell>
          <S.Cell>{el.hour}</S.Cell>
        </S.Container>
      ))}
    </>
  );
}
