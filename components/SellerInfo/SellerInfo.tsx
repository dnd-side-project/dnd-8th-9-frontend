import Table from "@/components/Table/Table";
import * as S from "./SellerInfo.styled";

const pickupHours = [
  { day: "월, 화, 목, 금", hour: "10:00 ~ 20:00" },
  { day: "수요일", hour: "10:00 ~ 20:00" },
  { day: "토,일,공휴일", hour: "9:00 ~ 17:00" },
];

const TITLE = "판매자 정보";

export default function SellerInfo() {
  return (
    <S.Container>
      <S.Title>{TITLE}</S.Title>
      <Table option="seller" data={pickupHours} />
    </S.Container>
  );
}
