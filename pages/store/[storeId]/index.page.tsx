/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function StorePage() {
  const router = useRouter();
  const { storeId } = router.query;

  useEffect(() => {
    if (storeId) {
      router.push(`/store/${storeId}/menu`);
    }
  }, [router, storeId]);
  return <p> </p>;
}

export default StorePage;
