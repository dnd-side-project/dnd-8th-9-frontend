import { store } from "@/mocks/mockData/store";
import NoticeInfo from "@/components/store/infoTable/NoticeInfo/NoticeInfo";
import Packaging from "@/components/store/infoTable/Packaging/Packaging";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import TableBox from "@/components/store/infoTable/TableBox/TableBox";

const NOTICE_INFO = "업체 공지";
const PICKUP_TIME = "픽업 가능 시간";
const PACKAGING = "포장 안내";
const SELLER_INFO = "판매자 정보";
const FOOD_INFO = "식품 정보";

function NoticePage() {
  return (
    <SectionLayout>
      <NoticeInfo title={NOTICE_INFO} data={store.notice.noticeInfo} />
      <TableBox option="notice" title={PICKUP_TIME} data={store.notice.pickupHours} />
      <Packaging title={PACKAGING} data={store.notice.packaging} />
      <TableBox option="info" title={SELLER_INFO} data={store.info.sellerInfo} />
      <TableBox option="info" title={FOOD_INFO} data={store.info.foodInfo} />
    </SectionLayout>
  );
}

export default NoticePage;
