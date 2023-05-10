import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { storeQueryKey } from "@/constants/queryKey";

function StorePage() {
  const router = useRouter();
  const { storeId } = router.query;

  useEffect(() => {
    if (storeId) {
      router.push(`/store/${Number(storeId)}/menu`);
    }
  }, [router, storeId]);
  return <p> </p>;
}

export default StorePage;

export async function getServerSideProps({ params: { storeId } }: { params: { storeId: number } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(storeQueryKey.detail(Number(storeId)));

  return {
    props: {
      dehydratedstate: dehydrate(queryClient),
    },
  };
}
