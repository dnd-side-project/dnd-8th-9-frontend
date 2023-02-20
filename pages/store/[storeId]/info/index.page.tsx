import { store } from "@/mocks/mockData/store";
import StoreHero from "@/components/store/StoreHero/StoreHero";
import Tab from "@/components/shared/Tab/Tab";
import TableBox from "@/components/store/infoTable/TableBox/TableBox";
import { storeTab } from "@/constants/navigations";
import * as S from "./info.styled";

const SELLER_INFO = "판매자 정보";
const FOOD_INFO = "식품 정보";

function InfoPage() {
  return (
    <S.Container>
      <StoreHero />
      <Tab type="swipeable" menuList={storeTab} target="storeTab" />
      <div>
        <TableBox option="info" title={SELLER_INFO} data={store.info.sellerInfo} />
        <TableBox option="info" title={FOOD_INFO} data={store.info.foodInfo} />
      </div>
    </S.Container>
  );
}

export default InfoPage;
