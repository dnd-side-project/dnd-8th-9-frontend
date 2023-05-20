import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { useGetStore } from "@/hooks/queries/store";
import { IKeyValue, IInfo, INotice } from "@/types/api";
import { storeQueryKey } from "@/constants/queryKey";
import { store } from "@/mocks/mockData/store";

import NoticeInfo from "@/components/store/infoTable/NoticeInfo/NoticeInfo";
import Packaging from "@/components/store/infoTable/Packaging/Packaging";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import Table from "@/components/store/infoTable/Table/Table";
import * as S from "./notice.styled";

const NOTICE_MOCK = store.notice;
const INFO_MOCK = store.info;
const BUSINESS_HOURS_MOCK = store.businessHours;

const INFO_TAB_DATA = (
  notice: INotice | null,
  info: IInfo | null,
  businessHours: IKeyValue | null,
) => [
  {
    title: "업체 공지",
    children: <NoticeInfo data={(notice || NOTICE_MOCK)?.noticeInfo} />,
  },
  {
    title: "영업 시간",
    children: <Table option="notice" tableData={businessHours || BUSINESS_HOURS_MOCK} />,
  },
  {
    title: "픽업 가능 시간",
    children: <Table option="notice" tableData={(notice || NOTICE_MOCK)?.pickupHours} />,
  },
  {
    title: "포장 안내",
    children: <Packaging data={(notice || NOTICE_MOCK)?.packaging} />,
  },
  {
    title: "판매자 정보",
    children: <Table option="info" tableData={(info || INFO_MOCK)?.sellerInfo} />,
  },
  {
    title: "식품 정보",
    children: <Table option="info" tableData={(info || INFO_MOCK)?.foodInfo} />,
  },
];

function NoticePage() {
  const {
    query: { storeId },
  } = useRouter();
  const { data: storeDetailsData, isLoading, isError } = useGetStore(Number(storeId));

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const { notice, info, businessHours } = storeDetailsData.data;

  return (
    <SectionLayout>
      {INFO_TAB_DATA(notice, info, businessHours)?.map(section => (
        <S.InfoContentBox key={section.title} title={section.title}>
          {section.children}
        </S.InfoContentBox>
      ))}
    </SectionLayout>
  );
}

export default NoticePage;

export async function getServerSideProps({ params: { storeId } }: { params: { storeId: string } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(storeQueryKey.detail(Number(storeId)));

  return {
    props: {
      dehydratedstate: dehydrate(queryClient),
    },
  };
}
