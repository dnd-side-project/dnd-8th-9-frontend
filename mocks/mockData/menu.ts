import { IMenu } from "@/api/types/menu";

export const menu: IMenu = {
  id: 2,
  name: "레터링 케이크 1호",
  category: ["레터링", "꽃"],
  basePrice: 20000,
  menuImage: [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/50/3f/77/503f772cb990ecd36543c9c6ea3e78dd.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/52/b0/20/52b020392b8a8719430456547c281897.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/14/14/5f/14145f03d79929b5f65705244345aaa4.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/61/83/34/618334f91508d1c24bdc9b22b98f6efc.jpg",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/8d/b6/c8/8db6c82cd1504ed3c79cdab41fe806ad.jpg",
    },
  ],
  basicInfo: [
    {
      name: "사이즈",
      desc: "미니(기본) / 1호(10,000) / 2호(+15,000) / 3호(+20,000)",
    },
    {
      name: "레터링",
      desc: "한글 8자 이내, 영문 16자 이내(특수기호 포함)",
    },
    {
      name: "맛",
      desc: "크림치즈(변경불가)",
    },
  ],
  detailInfo: {
    size: {
      value: [
        { name: "미니", desc: "12cm" },
        { name: "1호", desc: "15cm" },
        { name: "2호", desc: "18cm" },
        { name: "3호", desc: "21cm" },
      ],
      note: null,
    },
    taste: {
      value: [
        {
          name: "티라미슈 캐러멜 아몬드",
          desc: "달콤하면서 고소한 견과류의 향을 느껴보세요!",
        },
        {
          name: "치즈 라즈베리",
          desc: "꾸덕하고 상큼한 맛, 남녀노소 누구나 좋아해요 :)",
        },
      ],
      note: null,
    },
    design: {
      value: [
        {
          name: "하트모양 변경",
          price: 1000,
          desc: "하트모양 변경 시, 겉면은 크림치즈만 가능합니다.",
        },
        {
          name: "곰돌이 모양으로 변경",
          price: 3000,
          desc: "모양 변경 시, 치즈 라즈베리 맛만 가능합니다.",
        },
      ],
      note: null,
    },
    caution: {
      value: [
        "조화는 수급에 따라 비슷한 조화로 대체될수 있습니다.",
        "사용되는 꼿은 식용꽃으로 랜덤으로 사용됩니다. 꽃잎 컬러 및 모양은 지정 불가합니다.",
        "사용되는 꼿은 식용꽃으로 랜덤으로 사용됩니다. 꽃잎 컬러 및 모양은 지정 불가합니다. 및 모양은 지정 불가합니다.및 모양은 지정 불가합니다.및 모양은 지정 불가",
        "조화는 수급에 따라 비슷한 조화로 대체될수 있습니다.",
        "사용되는 꼿은 식용꽃으로 랜덤으로 사용됩니다. 꽃잎 컬러 및 모양은 지정 불가합니다.",
        "사용되는 꼿은 식용꽃으로 랜덤으로 사용됩니다. 꽃잎 컬러 및 모양은 지정 불가합니다.",
        "조화는 수급에 따라 비슷한 조화로 대체될수 있습니다.",
      ],
      note: null,
    },
  },
};
