import { store } from "@/mocks/mockData/store";
import NoticeInfo from "@/components/store/infoTable/NoticeInfo/NoticeInfo";
import Packaging from "@/components/store/infoTable/Packaging/Packaging";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import Table from "@/components/store/infoTable/Table/Table";
import * as S from "./notice.styled";

const INFO_TAB_DATA = [
  {
    title: "업체 공지",
    children: <NoticeInfo data={store.notice.noticeInfo} />,
  },
  {
    title: "픽업 가능 시간",
    children: <Table option="notice" data={store.notice.pickupHours} />,
  },
  {
    title: "포장 안내",
    children: <Packaging data={store.notice.packaging} />,
  },
  {
    title: "판매자 정보",
    children: <Table option="info" data={store.info.sellerInfo} />,
  },
  {
    title: "식품 정보",
    children: <Table option="info" data={store.info.foodInfo} />,
  },
];

function NoticePage() {
  return (
    <SectionLayout>
      {INFO_TAB_DATA.map(section => (
        <S.InfoContentBox key={section.title} title={section.title}>
          {section.children}
        </S.InfoContentBox>
      ))}
    </SectionLayout>
  );
}

export default NoticePage;
