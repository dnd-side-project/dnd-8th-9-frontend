/* eslint-disable no-param-reassign */
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IFile {
  file: File;
  url: string;
}

export interface IReviewState {
  menuId: number;
  menuName: string;
  menuImage: string;
  storeId: number;
  storeName: string;
  content: string;
  dangdo: number;
  sizeOption: string;
  goodPoint: string;
  reorder: boolean;
  files: IFile[];
}

type ReviewStore = {
  reviewState: IReviewState;
  updateReviewState: <K extends keyof IReviewState>(key: K, value: IReviewState[K]) => void;
  clearReviewState: () => void;
};

const initialState: IReviewState = {
  menuId: 0,
  menuName: "",
  menuImage: "",
  storeId: 0,
  storeName: "",
  content: "",
  dangdo: 0,
  sizeOption: "",
  goodPoint: "",
  reorder: false,
  files: [],
};

const useReviewStore = create<ReviewStore>()(
  devtools(set => ({
    reviewState: { ...initialState },
    updateReviewState: (key, value) =>
      set(state => {
        state.reviewState[key] = value;
        return { reviewState: state.reviewState };
      }),
    clearReviewState: () =>
      set(state => {
        state.reviewState = initialState;
        return { reviewState: state.reviewState };
      }),
  })),
);

export default useReviewStore;
