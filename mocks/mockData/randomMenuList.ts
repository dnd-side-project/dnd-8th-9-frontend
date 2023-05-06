import { ILink, IMenuListItem } from "@/types/api";

interface IRandomMenuListItem extends IMenuListItem {
  links: ILink[];
}

export const randomMenus: { menus: IRandomMenuListItem[] } = {
  menus: [
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
      category: ["레터링"],
      price: 40000,
      reviewCount: 2,
      bookmarkCount: 2,
      storeId: 8,
      storeName: "업체명",
      links: [
        {
          id: 1,
          platform: "kakao",
          url: "https://pf.kakao.com/_jIwLK",
          role: "주문 및 예약",
        },
        {
          id: 2,
          platform: "instagram",
          url: "https://www.instagram.com/cake.yesplease/",
          role: "실시간 문의",
        },
      ],
      canDelivery: true,
      canPickup: false,
    },
    {
      id: 5,
      name: "레터링 케이크 5호",
      price: 40000,
      menuImages: [
        {
          id: 34,
          targetId: 4,
          type: "MENU_IMAGE",
          url: "https://i.pinimg.com/564x/f3/fa/dc/f3fadc51e6200c4aebda9a6d8480103e.jpg",
        },
      ],
      category: ["레터링"],
      reviewCount: 22,
      bookmarkCount: 2,
      storeId: 8,
      storeName: "업체명",
      links: [
        {
          id: 1,
          platform: "kakao",
          url: "https://pf.kakao.com/_jIwLK",
          role: "주문 및 예약",
        },
        {
          id: 2,
          platform: "instagram",
          url: "https://www.instagram.com/cake.yesplease/",
          role: "실시간 문의",
        },
      ],
      canDelivery: true,
      canPickup: false,
    },
    {
      id: 6,
      name: "레터링 케이크 6호",
      menuImages: [
        {
          id: 34,
          targetId: 4,
          type: "MENU_IMAGE",
          url: "https://i.pinimg.com/564x/4a/df/79/4adf79a54b55ff828832636d7e3b62c9.jpg",
        },
      ],
      category: ["레터링"],
      price: 60000,
      reviewCount: 22,
      bookmarkCount: 2,
      storeId: 8,
      storeName: "업체명",
      links: [
        {
          id: 1,
          platform: "kakao",
          url: "https://pf.kakao.com/_jIwLK",
          role: "주문 및 예약",
        },
        {
          id: 2,
          platform: "instagram",
          url: "https://www.instagram.com/cake.yesplease/",
          role: "실시간 문의",
        },
      ],
      canDelivery: true,
      canPickup: false,
    },
    {
      id: 1,
      name: "도시락 케이크",
      menuImages: [
        {
          id: 34,
          targetId: 4,
          type: "MENU_IMAGE",
          url: "https://i.pinimg.com/564x/f5/db/6e/f5db6e47f1f306b10406941505d37972.jpg",
        },
      ],
      category: ["레터링"],
      price: 13000,
      reviewCount: 22,
      bookmarkCount: 2,
      storeId: 8,
      storeName: "업체명",
      links: [
        {
          id: 1,
          platform: "kakao",
          url: "https://pf.kakao.com/_jIwLK",
          role: "주문 및 예약",
        },
        {
          id: 2,
          platform: "instagram",
          url: "https://www.instagram.com/cake.yesplease/",
          role: "실시간 문의",
        },
      ],
      canDelivery: true,
      canPickup: false,
    },
    {
      id: 2,
      name: "레터링 케이크 1호",
      menuImages: [
        {
          id: 34,
          targetId: 4,
          type: "MENU_IMAGE",
          url: "https://i.pinimg.com/736x/2f/94/61/2f9461f1ec51e0f672362b62cc34b2ce.jpg",
        },
      ],
      category: ["레터링"],
      price: 20000,
      reviewCount: 22,
      bookmarkCount: 2,
      storeId: 8,
      storeName: "업체명",
      links: [
        {
          id: 1,
          platform: "kakao",
          url: "https://pf.kakao.com/_jIwLK",
          role: "주문 및 예약",
        },
        {
          id: 2,
          platform: "instagram",
          url: "https://www.instagram.com/cake.yesplease/",
          role: "실시간 문의",
        },
      ],
      canDelivery: true,
      canPickup: false,
    },
    {
      id: 3,
      name: "레터링 케이크 2호",
      menuImages: [
        {
          id: 34,
          targetId: 4,
          type: "MENU_IMAGE",
          url: "https://i.pinimg.com/564x/fd/84/6a/fd846aaf2f9b7bf8b47af18ce1bc5512.jpg",
        },
      ],
      category: ["레터링"],
      price: 30000,
      reviewCount: 22,
      bookmarkCount: 2,
      storeId: 8,
      storeName: "업체명",
      links: [
        {
          id: 1,
          platform: "kakao",
          url: "https://pf.kakao.com/_jIwLK",
          role: "주문 및 예약",
        },
        {
          id: 2,
          platform: "instagram",
          url: "https://www.instagram.com/cake.yesplease/",
          role: "실시간 문의",
        },
      ],
      canDelivery: true,
      canPickup: false,
    },
  ],
};
