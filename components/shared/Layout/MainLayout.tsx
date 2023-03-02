import { useEffect } from "react";
import { useRouter } from "next/router";
import { ROUTES_NAV } from "@/constants/nav";
import { ROUTES } from "@/constants/routes";
import * as S from "./Layout.styled";

interface IChildren {
  children: React.ReactNode;
}

function MainLayout({ children }: IChildren) {
  const router = useRouter();

  const isProtectedRoute = (pathname: string) => {
    return ROUTES_NAV[pathname]?.auth;
  };

  useEffect(() => {
    const { pathname } = router;
    const user = localStorage.getItem("access_token");

    if (isProtectedRoute(pathname) && !user) {
      router.push(ROUTES.LOGIN_PAGE);
    }
  }, [router]);

  return (
    <S.Centering>
      <S.FixedWidth>{children}</S.FixedWidth>
    </S.Centering>
  );
}

export default MainLayout;
