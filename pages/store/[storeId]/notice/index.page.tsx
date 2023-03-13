import { store } from "@/mocks/mockData/store";

import NoticeInfo from "@/components/store/infoTable/NoticeInfo/NoticeInfo";
import PickupHours from "@/components/store/infoTable/PickupHours/PickupHours";
import Packaging from "@/components/store/infoTable/Packaging/Packaging";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";

const NOTICE_INFO = "업체 공지";
const PICKUP_TIME = "픽업 가능 시간";
const PACKAGING = "포장 안내";

function NoticePage() {
  return (
    <SectionLayout>
      <NoticeInfo title={NOTICE_INFO} data={store.notice.noticeInfo} />
      <PickupHours option="notice" title={PICKUP_TIME} data={store.notice.pickupHours} />
      <Packaging title={PACKAGING} data={store.notice.packaging} />
    </SectionLayout>
  );
}

export default NoticePage;
