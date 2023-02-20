import React from "react";
import NoticeInfo from "@/components/NoticeInfo/NoticeInfo";
import PickupHours from "@/components/PickupHours/PickupHours";
import Packaging from "@/components/Packaging/Packaging";
import { store } from "@/mocks/mockData/store";
import StoreHero from "@/components/Store/StoreHero/StoreHero";
import { storeTab } from "@/constants/navigations";
import Tab from "@/components/shared/Tab/Tab";
import * as S from "./notice.styled";

const NOTICE_INFO = "업체 공지";
const PICKUP_TIME = "픽업 가능 시간";
const PACKAGING = "포장 안내";

function NoticePage() {
  return (
    <S.Container>
      <StoreHero />
      <Tab type="swipeable" menuList={storeTab} target="storeTab" />
      <NoticeInfo title={NOTICE_INFO} data={store.notice.noticeInfo} />
      <PickupHours option="notice" title={PICKUP_TIME} data={store.notice.pickupHours} />
      <Packaging title={PACKAGING} data={store.notice.packaging} />
    </S.Container>
  );
}

export default NoticePage;
