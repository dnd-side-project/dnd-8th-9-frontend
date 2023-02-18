import React from "react";
import Info from "@/components/Info/Info";
import { store } from "@/mocks/mockData/store";

const SELLER_INFO = "판매자 정보";
const FOOD_INFO = "식품 정보";

function InfoPage() {
  return (
    <>
      <Info title={SELLER_INFO} data={store.info.sellerInfo} />
      <Info title={FOOD_INFO} data={store.info.foodInfo} />
    </>
  );
}

export default InfoPage;
