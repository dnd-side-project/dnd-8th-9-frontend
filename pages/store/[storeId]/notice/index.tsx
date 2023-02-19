import React from "react";
import NoticeInfo from "@/components/NoticeInfo/NoticeInfo";
import TableBox from "@/components/TableBox/TableBox";
import Packaging from "@/components/Packaging/Packaging";
import { store } from "@/mocks/mockData/store";

const NOTICE_INFO = "업체 공지";
const PICKUP_TIME = "픽업 가능 시간";
const PACKAGING = "포장 안내";

function NoticePage() {
  return (
    <>
      <NoticeInfo title={NOTICE_INFO} data={store.notice.noticeInfo} />
      {/* PickUpTime 으로 분리  */}
      <TableBox option="notice" title={PICKUP_TIME} data={store.notice.pickupHours} />
      <Packaging title={PACKAGING} data={store.notice.packaging} />
    </>
  );
}

export default NoticePage;
