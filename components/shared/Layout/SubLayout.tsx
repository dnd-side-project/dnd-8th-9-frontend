import { useRouter } from "next/router";
import { ROUTES_NAV } from "@/constants/navigation";
import GNB from "../GNB/GNB";
import Navbar from "../Navbar/Navbar";
import * as S from "./Layout.styled";

interface IChildren {
  children: React.ReactNode;
}

const SubLayout = ({ children }: IChildren) => {
  const { pathname } = useRouter();
  const hasNav = ROUTES_NAV[pathname]?.nav !== undefined;
  const hasGnb = ROUTES_NAV[pathname]?.gnb !== undefined;

  return (
    <>
      {hasNav && <Navbar {...ROUTES_NAV[pathname].nav} />}
      <S.Main hasNav={!!hasNav} hasGnb={hasGnb}>
        {children}
      </S.Main>
      {hasGnb && <GNB />}
    </>
  );
};

export default SubLayout;
