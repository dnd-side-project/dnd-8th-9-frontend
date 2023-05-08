import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { IStoreDetailsSpecific } from "@/mocks/mockData/store";
import { useGetStore, useGetStoreReviews } from "@/hooks/queries/store";
import storeApi from "@/api/domains/store";
import { storeQueryKey } from "@/constants/queryKey";

import PreviewImage from "@/components/store/review/PreviewImage/PreviewImage";
import ReviewFilter from "@/components/ReviewFilter/ReviewFilter";
import OverallStats from "@/components/store/review/OverallStats/OverallStats";
import Review from "@/components/store/review/Review/Review";
import SectionLayout from "@/components/store/SectionLayout/SectionLayout";
import Sort from "@/components/shared/Sort/Sort";
import * as S from "./review.styled";

function ReviewPage() {
  const router = useRouter();
  const { storeId } = router.query;

  const { data: storeReviewsData } = useGetStoreReviews(Number(storeId));
  const { data: storeDetailsData } = useGetStore(Number(storeId));

  if (!storeReviewsData || !storeDetailsData) return <h1>Loading...</h1>;

  const reviewImages = storeReviewsData.data.map(review => review.reviewImages).flat();

  return (
    <SectionLayout>
      <S.ContentWrap>
        {(storeDetailsData.data as IStoreDetailsSpecific).overallStats && (
          <OverallStats data={(storeDetailsData.data as IStoreDetailsSpecific).overallStats} />
        )}
        <PreviewImage reviewImages={reviewImages} />
        <S.ReviewContent>
          <S.ReviewTitle as="p" size={16} weight={600}>
            전체 <strong>{storeReviewsData.data.length}</strong>건
          </S.ReviewTitle>
          <ReviewFilter />
          <Sort />
          <div>
            {storeReviewsData.data.map(review => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </S.ReviewContent>
      </S.ContentWrap>
    </SectionLayout>
  );
}

export default ReviewPage;

export async function getServerSideProps({ params: { storeId } }: { params: { storeId: string } }) {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery(storeQueryKey.reviews(Number(storeId)), () =>
      storeApi.getStoreReviews(Number(storeId)),
    ),
    queryClient.prefetchQuery(storeQueryKey.detail(Number(storeId)), () =>
      storeApi.getStoreDetails(Number(storeId)),
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
