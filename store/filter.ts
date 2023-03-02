import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FilterState {
  filterModalOpen: boolean;
  toggleFilterModalOpen: () => void;
}

const useFilterStore = create<FilterState>()(
  devtools(set => ({
    filterModalOpen: false,

    toggleFilterModalOpen: () => set(state => ({ filterModalOpen: !state.filterModalOpen })),
  })),
);

export default useFilterStore;
