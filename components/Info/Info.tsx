import Table from "@/components/Table/Table";
import * as S from "./Info.styled";

// const pickupHours = [
//   { day: "월, 화, 목, 금", hour: "10:00 ~ 20:00" },
//   { day: "수요일", hour: "10:00 ~ 20:00" },
//   { day: "토,일,공휴일", hour: "9:00 ~ 17:00" },
// ];

interface IInfo {
  title: string;
  data: {
    key: string;
    value: string;
  }[];
}

export default function Info({ title, data }: IInfo) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <Table option="info" data={data} />
    </S.Container>
  );
}
