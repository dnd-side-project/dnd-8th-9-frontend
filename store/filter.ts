import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TFilterTab = "카테고리" | "가격" | "주문플랫폼" | "수령방법";

interface FilterState {
  currentFilterTab: TFilterTab;
  filterModalOpen: boolean;
  toggleFilterModalOpen: () => void;
  changeCurrentFilterTab: (newFilterTab: TFilterTab) => void;
}

const useFilterStore = create<FilterState>()(
  devtools(set => ({
    currentFilterTab: "카테고리",
    filterModalOpen: false,

    toggleFilterModalOpen: () => set(state => ({ filterModalOpen: !state.filterModalOpen })),
    changeCurrentFilterTab: (newFilterTab: TFilterTab) => set({ currentFilterTab: newFilterTab }),
  })),
);

export default useFilterStore;
