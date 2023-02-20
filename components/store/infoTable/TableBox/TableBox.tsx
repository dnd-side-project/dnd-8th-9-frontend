import Table from "../Table/Table";
import * as S from "./TableBox.styled";

interface IInfo {
  option: string;
  title: string;
  data: (
    | {
        key: string;
        value: string;
      }
    | {
        day: string;
        hour: string;
      }
  )[];
}

export default function TableBox({ option, title, data }: IInfo) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <Table option={option} data={data} />
    </S.Container>
  );
}
