/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type TFilterTab = "카테고리" | "가격" | "주문플랫폼" | "수령방법";
interface ISelectedOptions {
  카테고리: string[];
  가격: string;
  주문플랫폼: string[];
  수령방법: string[];
  [key: string]: string | string[];
}

interface FilterState {
  currentFilterTab: TFilterTab;
  filterModalOpen: boolean;
  selectedFilterOptions: ISelectedOptions;
  appliedFilterOptions: ISelectedOptions;

  applySelectedFilterOptions: () => void;
  toggleFilterModalOpen: () => void;
  changeCurrentFilterTab: (newFilterTab: TFilterTab) => void;
  updateSelectedFilterOptions: (target: TFilterTab, newOption: string) => void;
}

const useFilterStore = create(
  devtools(
    immer<FilterState>(set => ({
      currentFilterTab: "카테고리",
      filterModalOpen: false,
      selectedFilterOptions: {
        카테고리: [],
        가격: "",
        주문플랫폼: [],
        수령방법: [],
      },
      appliedFilterOptions: {
        카테고리: [],
        가격: "",
        주문플랫폼: [],
        수령방법: [],
      },

      applySelectedFilterOptions: () =>
        set(state => {
          state.appliedFilterOptions = state.selectedFilterOptions;
        }),
      updateSelectedFilterOptions: (target: TFilterTab, newOption: string) =>
        set(state => {
          if (target === "가격") {
            if (state.selectedFilterOptions[target] !== newOption) {
              state.selectedFilterOptions[target] = newOption;
            }
          } else if (
            state.selectedFilterOptions[target].findIndex(option => option === newOption) !== -1
          ) {
            const index = state.selectedFilterOptions[target].findIndex(
              option => option === newOption,
            );
            state.selectedFilterOptions[target].splice(index, 1);
          } else {
            state.selectedFilterOptions[target].push(newOption);
          }
        }),
      toggleFilterModalOpen: () => set(state => ({ filterModalOpen: !state.filterModalOpen })),
      changeCurrentFilterTab: (newFilterTab: TFilterTab) => set({ currentFilterTab: newFilterTab }),
    })),
  ),
);

export default useFilterStore;
