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
          const isNewStore =
            state.bookmarkStoreList.findIndex(store => store.id === newStore.id) === -1;
          if (isNewStore) {
            state.bookmarkStoreList.push(newStore);
          } else {
            const index = state.bookmarkStoreList.findIndex(store => store.id === newStore.id);
            state.bookmarkStoreList.splice(index, 1);
          }
        }),
      updateBookmarkMenuList: (newMenu: IRandomMenuItem) =>
        set(state => {
          const isNewMenu = state.bookmarkMenuList.findIndex(menu => menu.id === newMenu.id) === -1;
          if (isNewMenu) {
            state.bookmarkMenuList.push(newMenu);
          } else {
            const index = state.bookmarkMenuList.findIndex(menu => menu.id === newMenu.id);
            state.bookmarkMenuList.splice(index, 1);
          }
        }),
    })),
  ),
);

export default useBookmarkStore;
