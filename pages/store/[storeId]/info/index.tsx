import React from "react";
import TableBox from "@/components/TableBox/TableBox";
import { store } from "@/mocks/mockData/store";

const SELLER_INFO = "판매자 정보";
const FOOD_INFO = "식품 정보";

function InfoPage() {
  return (
    <>
      <TableBox option="info" title={SELLER_INFO} data={store.info.sellerInfo} />
      <TableBox option="info" title={FOOD_INFO} data={store.info.foodInfo} />
    </>
  );
}

export default InfoPage;
