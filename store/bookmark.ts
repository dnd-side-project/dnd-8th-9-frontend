import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IStoreItem } from "@/api/types/storeList";
import { IRandomMenuItem } from "@/api/types/randomMenuList";

interface IImage {
  id: number;
  url: string;
}

interface BookmarkState {
  bookmarkStoreList: IStoreItem[];
  bookmarkMenuList: IRandomMenuItem[];
  updateBookmarkStoreList: (store: IStoreItem) => void;
  updateBookmarkMenuList: (menu: IRandomMenuItem) => void;
}

const useBookmarkStore = create<BookmarkState>()(
  devtools(
    immer(set => ({
      bookmarkStoreList: [],
      bookmarkMenuList: [],
      updateBookmarkStoreList: (newStore: IStoreItem) =>
        set(state => {
          if (state.bookmarkStoreList.findIndex(store => store.id === newStore.id) === -1) {
            state.bookmarkStoreList.push(newStore);
          }
        }),
      updateBookmarkMenuList: (newMenu: IRandomMenuItem) =>
        set(state => {
          if (state.bookmarkMenuList.findIndex(menu => menu.id === newMenu.id) === -1) {
            state.bookmarkMenuList.push(newMenu);
          }
        }),
    })),
  ),
);

export default useBookmarkStore;
