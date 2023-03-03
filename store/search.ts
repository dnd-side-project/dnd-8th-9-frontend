import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface SearchState {
  currentSearch: string;
  searchHistory: string[];

  addSearchHistory: (newSearchKeyword: string) => void;
  clearSearchHistory: () => void;
  updateCurrentSearch: (newSearchKeyword: string) => void;
}

const useSearchStore = create<SearchState>()(
  devtools(
    immer(set => ({
      currentSearch: "",
      searchHistory: ["케릭터", "스누피", "어버이날", "레터링", "도시락", "2단", "고양이", "돈"],

      addSearchHistory: (newSearchKeyword: string) =>
        set(state => {
          state.searchHistory.unshift(newSearchKeyword);
        }),
      clearSearchHistory: () => set(() => ({ searchHistory: [] })),
      updateCurrentSearch: (newSearchKeyword: string) =>
        set(() => ({ currentSearch: newSearchKeyword })),
    })),
  ),
);

export default useSearchStore;
