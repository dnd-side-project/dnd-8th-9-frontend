/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { TCategory } from "@/types/api";
import { IFilterStore } from "@/types/store/filter";

type TFilterTab = "카테고리" | "가격" | "주문플랫폼" | "수령방법";

interface FilterState {
  currentFilterTab: TFilterTab;
  filterModalOpen: boolean;

  selectedFilterOptions: IFilterStore;
  appliedFilterOptions: IFilterStore;

  changeCurrentFilterTab: (newFilterTab: TFilterTab) => void;
  toggleFilterModalOpen: () => void;

  updateSelectedFilterOptions: (target: TFilterTab, newOption: string) => void;
  resetSelectedFilterOptions: () => void;
  syncSelectedAndAppliedFilterOptions: (direction: "selected" | "applied") => void;

  clearAppliedFilterSection: (target: TFilterTab) => void;
  updateAppliedFilterOptions: (updatedSelectedOptions?: IFilterStore) => void;
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
        수령방법: "",
      },
      appliedFilterOptions: {
        카테고리: [],
        가격: "",
        주문플랫폼: [],
        수령방법: "",
      },

      // NOTE: 현재 filterTab 업데이트
      changeCurrentFilterTab: (newFilterTab: TFilterTab) => set({ currentFilterTab: newFilterTab }),

      // NOTE: filter Modal 상태값
      toggleFilterModalOpen: () => set(state => ({ filterModalOpen: !state.filterModalOpen })),

      // NOTE: 선택한 filter option update (임시)
      updateSelectedFilterOptions: (target: TFilterTab, newOption: string) =>
        set(state => {
          if (target === "가격" || target === "수령방법") {
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
            state.selectedFilterOptions[target].push(newOption as TCategory);
          }
        }),

      // NOTE: 선택한 임시 필터값 초기화 -> 초기화 버튼 클릭시
      resetSelectedFilterOptions: () =>
        set(state => {
          const initial = { 카테고리: [], 가격: "", 주문플랫폼: [], 수령방법: "" };
          state.selectedFilterOptions = initial;
        }),

      // NOTE: 임시로 선택한 필터값 적용 -> 필터 적용 버튼 클릭시
      syncSelectedAndAppliedFilterOptions: (direction: "selected" | "applied") =>
        set(state => {
          if (direction === "applied") {
            state.selectedFilterOptions = state.appliedFilterOptions;
          } else if (direction === "selected") {
            state.appliedFilterOptions = state.selectedFilterOptions;
          }
        }),

      // NOTE: 적용된 필터값 섹션별로 삭제 -> filter bar내 X 버튼 클릭시
      clearAppliedFilterSection: (target: TFilterTab) =>
        set(state => {
          if (target === "가격" || target === "수령방법") {
            state.appliedFilterOptions[target] = "";
            state.selectedFilterOptions[target] = "";
          } else {
            state.appliedFilterOptions[target] = [];
            state.selectedFilterOptions[target] = [];
          }
        }),

      // NOTE: 적용된 필터 옵션 변경시 -> 페이지 첫 진입시 url에 따른 필터링값 반영시
      updateAppliedFilterOptions: (updatedSelectedOptions?: IFilterStore) =>
        set(state => {
          if (updatedSelectedOptions) {
            state.appliedFilterOptions = updatedSelectedOptions;
            state.selectedFilterOptions = updatedSelectedOptions;
          }
        }),
    })),
  ),
);

export default useFilterStore;
