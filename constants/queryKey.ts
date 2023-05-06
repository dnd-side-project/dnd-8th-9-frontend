interface IMenuQueryKey {
  list: readonly string[];
  detail: (menuId: number) => readonly string[];
  reviews: (reviewId: number) => readonly string[];
}

interface IReviewQueryKey {
  list: readonly string[];
  detail: (reviewId: number) => readonly string[];
}

interface IStoreQueryKey {
  list: readonly string[];
  detail: (storeId: number) => readonly string[];
  menus: (storeId: number) => readonly string[];
  reviews: (storeId: number) => readonly string[];
}

interface IUserQueryKey {
  detail: readonly string[];
  storeBookmarks: () => readonly string[];
  menuBookmarks: () => readonly string[];
}

export const menuQueryKey: IMenuQueryKey = {
  list: ["menus"] as const,
  detail: menuId => [...menuQueryKey.list, "detail", menuId.toString()] as const,
  reviews: menuId => [...menuQueryKey.detail(menuId), "reviews"] as const,
};

export const reviewQueryKey: IReviewQueryKey = {
  list: ["reviews"] as const,
  detail: reviewId => [...reviewQueryKey.list, "detail", reviewId.toString()] as const,
};

export const storeQueryKey: IStoreQueryKey = {
  list: ["stores"] as const,
  detail: storeId => [...storeQueryKey.list, "detail", storeId.toString()] as const,
  menus: storeId => [...storeQueryKey.detail(storeId), "menus"] as const,
  reviews: storeId => [...storeQueryKey.detail(storeId), "reviews"] as const,
};

export const userQueryKey: IUserQueryKey = {
  detail: ["user"] as const,
  storeBookmarks: () => [...userQueryKey.detail, "bookmarks", "store"],
  menuBookmarks: () => [...userQueryKey.detail, "bookmarks", "menu"],
};
