import { useRouter } from "next/router";
import { GNB_VISIBILITY, NAVIGATION_HEADER } from "@/constants/navigations";
import GNB from "../GNB/GNB";
import Navbar from "../Navbar/Navbar";
import * as S from "./Layout.styled";

interface IChildren {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IChildren) => {
  // TODO:
  // 1. GNB 조건부 렌더링
  // 2. GNB 클릭시 색깔 변경
  // 3. ROUTE -> nav, gnb 나머지 모두 추가 (draft)

  const { pathname } = useRouter();

  const { scrollBgColor = "" } = NAVIGATION_HEADER[pathname];
  const haveGNB = GNB_VISIBILITY[pathname];

  return (
    <S.Centering>
      <S.FixedWidth>
        <Navbar />
        <S.Main noPaddingTop={!!scrollBgColor}>{children}</S.Main>
        {haveGNB && <GNB />}
      </S.FixedWidth>
    </S.Centering>
  );
};

export default AppLayout;
