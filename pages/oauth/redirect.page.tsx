/* eslint-disable react-hooks/exhaustive-deps */
import { ROUTES } from "@/constants/routes";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

function KakaoRedirectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("access_token", token);
      router.push(ROUTES.ONBOARD_WELCOME);
    }
  }, [router]);

  return <div>Logging In...</div>;
}

export default KakaoRedirectPage;
