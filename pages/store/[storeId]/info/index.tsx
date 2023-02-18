import React from "react";
import SellerInfo from "@/components/SellerInfo/SellerInfo";
import Table from "@/components/Table/Table";

const sellerInfo = [
  { key: "상호", value: "당도" },
  { key: "주소", value: "서울시 마포구 마포대로 93번길 11 (망원동, 송학빌라) 1층" },
  { key: "사업자등록번호", value: "000-01-012345" },
  { key: "통신판매업번호", value: "2022-OOOO-1023" },
  { key: "전화번호", value: "0507-1234-1234" },
];

function InfoPage() {
  return (
    <>
      <SellerInfo />
      <Table option="info" data={sellerInfo} />
    </>
  );
}

export default InfoPage;
