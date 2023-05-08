/* eslint-disable no-param-reassign */
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IMenuListItem, IStoreListItem } from "@/types/api";

interface BookmarkState {
  bookmarkStoreList: IStoreListItem[];
  bookmarkMenuList: IMenuListItem[];
  editBookmarkList: string[];
  updateBookmarkStoreList: (store: IStoreListItem) => void;
  updateBookmarkMenuList: (menu: IMenuListItem) => void;
  updateEditBookmarkList: (name: string) => void;
  deleteAllMenuBookmarkList: () => void;
  deleteAllStoreBookmarkList: () => void;
  clearEditBookmarkList: () => void;
}

const useBookmarkStore = create<BookmarkState>()(
  devtools(
    immer(set => ({
      bookmarkStoreList: [],
      bookmarkMenuList: [],
      editBookmarkList: [],
      updateBookmarkStoreList: (newStore: IStoreListItem) =>
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
      updateBookmarkMenuList: (newMenu: IMenuListItem) =>
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
      deleteAllStoreBookmarkList: () => {
        set(state => {
          const newBookmarkStoreList = state.bookmarkStoreList.filter(
            item => !state.editBookmarkList.includes(item.name),
          );
          state.bookmarkStoreList = newBookmarkStoreList;
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
