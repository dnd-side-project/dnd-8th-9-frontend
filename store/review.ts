import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { IReviewListItem } from "@/types/api";

interface ReviewState {
  reviews: IReviewListItem[];
  updateReviews: (review: IReviewListItem) => void;
}

const useReviewStore = create<ReviewState>()(
  devtools(set => ({
    reviews: [],
    updateReviews: (review: IReviewListItem) =>
      set(state => ({
        reviews: [...state.reviews, review],
      })),
  })),
);

export default useReviewStore;
