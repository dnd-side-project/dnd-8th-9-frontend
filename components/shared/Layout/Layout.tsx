import { useRouter } from "next/router";
import { NAVIGATION_HEADER } from "@/constants/navigations";
import GNB from "../GNB/GNB";
import Navbar from "../Navbar/Navbar";
import * as S from "./Layout.styled";

interface IChildren {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IChildren) => {
  const { pathname } = useRouter();

  const { scrollBgColor = "" } = NAVIGATION_HEADER[pathname];

  return (
    <S.Centering>
      <S.FixedWidth>
        <Navbar />
        <S.Main noPaddingTop={!!scrollBgColor}>{children}</S.Main>
        <GNB />
      </S.FixedWidth>
    </S.Centering>
  );
};

export default AppLayout;
