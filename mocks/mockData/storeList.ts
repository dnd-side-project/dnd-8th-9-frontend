import { IStoreItem } from "@/api/types/storeList";

export const storeList: IStoreItem[] = [
  {
    id: 1,
    name: "레브레",
    location: "서울시 마포구",
    rating: 80,
    priceRange: { max: 70000, min: 15000 },
    canPickup: true,
    canDelivery: true,
    category: ["레터링"],
    storeImages: [
      {
        id: 1,
        url: "https://i.pinimg.com/564x/65/a4/8e/65a48e006c238b0192aa1e82f3605139.jpg",
      },
      {
        id: 2,
        url: "https://i.pinimg.com/564x/b0/23/e1/b023e13b4c38f3654e0e3f949e101236.jpg",
      },
      {
        id: 3,
        url: "https://i.pinimg.com/736x/64/da/e5/64dae50ccf01adc5f8f66b3397f04f55.jpg",
      },
    ],
    links: {
      kakao: "https://pf.kakao.com/_jIwLK",
      instagram: "https://www.instagram.com/cake.yesplease/",
    },
  },
  {
    id: 2,
    name: "케이크예스",
    location: "서울시 서초구",
    rating: 70,
    priceRange: { max: 100000, min: 30000 },
    canPickup: true,
    canDelivery: true,
    category: ["레터링", "캐릭터/입체"],
    storeImages: [
      {
        id: 1,
        url: "https://i.pinimg.com/564x/5d/a7/78/5da778959b73a8d2e22b6c7c50ac95e7.jpg",
      },
      {
        id: 2,
        url: "https://i.pinimg.com/564x/44/09/5b/44095bb81333909bd29b177575c2cdda.jpg",
      },
      {
        id: 3,
        url: "https://i.pinimg.com/564x/7d/ec/e1/7dece1c61d02f74609ad37391492bab1.jpg",
      },
    ],
    links: {
      kakao: "https://pf.kakao.com/_jIwLK",
    },
  },
  {
    id: 3,
    name: "케키",
    location: "서울시 동작구",
    rating: 90,
    priceRange: { max: 80000, min: 20000 },
    canPickup: true,
    canDelivery: true,
    category: ["꽃", "캐릭터/입체"],
    storeImages: [
      {
        id: 1,
        url: "https://i.pinimg.com/564x/70/62/35/7062353080ef6b637b562368a54c42f6.jpg",
      },
      {
        id: 2,
        url: "https://i.pinimg.com/564x/a2/45/b8/a245b84b33ed2cdad8abe8d41e386204.jpg",
      },
      {
        id: 3,
        url: "https://i.pinimg.com/564x/e9/69/b3/e969b3f2d589f8b0844a339ebf9bfd20.jpg",
      },
    ],
    links: {
      instagram: "https://www.instagram.com/cake.yesplease/",
    },
  },
  {
    id: 4,
    name: "레브레",
    location: "서울시 마포구",
    rating: 80,
    priceRange: { max: 70000, min: 15000 },
    canPickup: true,
    canDelivery: true,
    category: ["레터링"],
    storeImages: [
      {
        id: 1,
        url: "https://i.pinimg.com/564x/be/f1/2d/bef12daf08f3ee70e6155c56a0720afe.jpg",
      },
      {
        id: 2,
        url: "https://i.pinimg.com/564x/ba/eb/37/baeb37d811c8d63c7ec05fdc2d657749.jpg",
      },
      {
        id: 3,
        url: "https://i.pinimg.com/564x/f2/c5/7f/f2c57fa289368e0566e109640a0ef3ad.jpg",
      },
    ],
    links: {
      kakao: "https://pf.kakao.com/_jIwLK",
      instagram: "https://www.instagram.com/cake.yesplease/",
    },
  },
  {
    id: 5,
    name: "케이크예스",
    location: "서울시 서초구",
    rating: 70,
    priceRange: { max: 100000, min: 30000 },
    canPickup: true,
    canDelivery: true,
    category: ["레터링", "캐릭터/입체"],
    storeImages: [
      {
        id: 1,
        url: "https://i.pinimg.com/736x/fd/cd/94/fdcd94706090de8bdd573716e582cd96.jpg",
      },
      {
        id: 2,
        url: "https://i.pinimg.com/564x/85/8e/a3/858ea307cb0eefc554965d283eb0517a.jpg",
      },
      {
        id: 3,
        url: "https://i.pinimg.com/564x/4a/d4/2c/4ad42c76c99d73555819df1d6ced69ba.jpg",
      },
    ],
    links: {
      kakao: "https://pf.kakao.com/_jIwLK",
    },
  },
  {
    id: 6,
    name: "케키",
    location: "서울시 동작구",
    rating: 90,
    priceRange: { max: 80000, min: 20000 },
    canPickup: true,
    canDelivery: true,
    category: ["꽃", "캐릭터/입체"],
    storeImages: [
      {
        id: 1,
        url: "https://i.pinimg.com/564x/15/41/50/1541507302101dbf8ade360f8ea63f3b.jpg",
      },
      {
        id: 2,
        url: "https://i.pinimg.com/564x/87/c4/af/87c4af611f4cd2e5d0d6b467bedf7687.jpg",
      },
      {
        id: 3,
        url: "https://i.pinimg.com/564x/41/d9/48/41d948aa20abb54a937a2ae56c555703.jpg",
      },
    ],
    links: {
      instagram: "https://www.instagram.com/cake.yesplease/",
    },
  },
];
