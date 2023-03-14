import { store } from "@/mocks/mockData/store";
import TableBox from "@/components/store/infoTable/TableBox/TableBox";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";

const SELLER_INFO = "판매자 정보";
const FOOD_INFO = "식품 정보";

function InfoPage() {
  return (
    <SectionLayout>
      <TableBox option="info" title={SELLER_INFO} data={store.info.sellerInfo} />
      <TableBox option="info" title={FOOD_INFO} data={store.info.foodInfo} />
    </SectionLayout>
  );
}

export default InfoPage;
