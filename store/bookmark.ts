/* eslint-disable no-param-reassign */
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
  editBookmarkList: string[];
  updateBookmarkStoreList: (store: IStoreItem) => void;
  updateBookmarkMenuList: (menu: IRandomMenuItem) => void;
  updateEditBookmarkList: (name: string) => void;
  deleteAllMenuBookmarkList: () => void;
  clearEditBookmarkList: () => void;
}

const useBookmarkStore = create<BookmarkState>()(
  devtools(
    immer(set => ({
      bookmarkStoreList: [],
      bookmarkMenuList: [],
      editBookmarkList: [],
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
      updateEditBookmarkList: (name: string) => {
        set(state => {
          if (state.editBookmarkList.includes(name)) {
            const index = state.editBookmarkList.indexOf(name);
            state.editBookmarkList.splice(index, 1);
          } else {
            state.editBookmarkList.push(name);
          }
        });
      },
      deleteAllMenuBookmarkList: () => {
        set(state => {
          const newBookmarkMenuList = state.bookmarkMenuList.filter(
            item => !state.editBookmarkList.includes(item.name),
          );
          state.bookmarkMenuList = newBookmarkMenuList;
        });
      },
      clearEditBookmarkList: () => {
        set(state => {
          state.editBookmarkList = [];
        });
      },
    })),
  ),
);

export default useBookmarkStore;
