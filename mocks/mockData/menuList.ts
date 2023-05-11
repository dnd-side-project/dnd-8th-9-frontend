import { IStoreMenuListItem } from "@/types/api";

export const menuList: IStoreMenuListItem[] = [
  {
    id: 1,
    name: "도시락 케이크",
    menuImages: [
      {
        id: 12,
        targetId: 1,
        type: "MENU_IMAGE",
        url: "https://i.pinimg.com/564x/f5/db/6e/f5db6e47f1f306b10406941505d37972.jpg",
      },
    ],
    storeId: 112,
    storeName: "케이크예스",
    desc: "색상, 레터링, 사이즈 변경가능, 데코는 기본가에 금액추가",
    basePrice: 13000,
  },
  {
    id: 2,
    name: "레터링 케이크 1호",
    menuImages: [
      {
        id: 21,
        type: "MENU_IMAGE",
        targetId: 2,
        url: "https://i.pinimg.com/564x/50/3f/77/503f772cb990ecd36543c9c6ea3e78dd.jpg",
      },
    ],
    storeId: 112,
    storeName: "케이크예스",
    desc: "색상, 레터링, 사이즈 변경가능, 데코는 기본가에 금액추가",
    basePrice: 20000,
  },
  {
    id: 3,
    name: "레터링 케이크 2호",
    menuImages: [
      {
        id: 32,
        targetId: 3,
        type: "MENU_IMAGE",
        url: "https://i.pinimg.com/564x/fd/84/6a/fd846aaf2f9b7bf8b47af18ce1bc5512.jpg",
      },
    ],
    storeId: 112,
    storeName: "케이크예스",
    desc: "색상, 레터링, 사이즈 변경가능, 데코는 기본가에 금액추가",
    basePrice: 30000,
  },
  {
    id: 4,
    name: "레터링 케이크 3호",
    menuImages: [
      {
        id: 44,
        targetId: 4,
        type: "MENU_IMAGE",
        url: "https://i.pinimg.com/564x/c3/34/a0/c334a04e6924a0482e536c778549cd5d.jpg",
      },
    ],
    storeId: 112,
    storeName: "케이크예스",
    desc: "색상, 레터링, 사이즈 변경가능, 데코는 기본가에 금액추가",
    basePrice: 40000,
  },
  {
    id: 5,
    name: "레터링 케이크 5호",
    menuImages: [
      {
        id: 52,
        targetId: 5,
        type: "MENU_IMAGE",
        url: "https://i.pinimg.com/564x/a2/54/89/a254899619572c676be07a96d0c64e15.jpg",
      },
    ],
    storeId: 112,
    storeName: "케이크예스",
    desc: "색상, 레터링, 사이즈 변경가능, 데코는 기본가에 금액추가",
    basePrice: 50000,
  },
  {
    id: 6,
    name: "레터링 케이크 6호",
    menuImages: [
      {
        id: 62,
        targetId: 6,
        type: "MENU_IMAGE",
        url: "https://i.pinimg.com/564x/4a/df/79/4adf79a54b55ff828832636d7e3b62c9.jpg",
      },
    ],
    storeId: 112,
    storeName: "케이크예스",
    desc: "색상, 레터링, 사이즈 변경가능, 데코는 기본가에 금액추가",
    basePrice: 60000,
  },
];
