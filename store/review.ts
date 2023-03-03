import { create } from "zustand";
import { devtools } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";

import { IReviewItem } from "@/api/types/review";
// import { IStoreItem } from "@/api/types/storeList";
import { reviews } from "@/mocks/mockData/review";

interface ReviewState {
  reviews: IReviewItem[];
  updateReviews: (review: IReviewItem) => void;
}

const useReviewStore = create<ReviewState>()(
  devtools(set => ({
    reviews: reviews.reviewList,
    updateReviews: (review: IReviewItem) =>
      set(state => ({
        reviews: [...state.reviews, review],
      })),
  })),
);

export default useReviewStore;
