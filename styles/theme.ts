import { Theme } from "@emotion/react";

const Z_INDEX = {
  BELOW: 100,
  BASE: 0,
  ABOVE: 100,
};

const theme: Theme = {
  fontSizes: {
    10: "10px",
    11: "11px",
    12: "12px",
    13: "13px",
    14: "14px",
    15: "15px",
    16: "16px",
    18: "18px",
    20: "20px",
    22: "22px",
    24: "24px",
    26: "26px",
    28: "28px",
    30: "30px",
    32: "32px",
  },
  colors: {
    primary: "#F1424D",
    secondary: "#FFA4A9",
    navy: {
      100: "#F7F8FA",
      200: "#7C87AD",
      300: "#4C536D",
      400: "#0E1B47",
    },
    gray: {
      100: "#D7D7D7",
      200: "#A2A2A2",
      300: "#A5A5A5",
      400: "#525252",
      500: "#3C3C3C",
    },
    white: {
      100: "#fff",
      200: "#F2F2F2",
      300: "#F0F0F0",
      400: "#EFEFEF",
      500: "#EEEEEE",
      600: "#E9E9E9",
    },
    black: "#202020",
    pink: {
      100: "#FFFBFB",
      200: "#FFF4F5",
      300: "#FFE8E9",
      400: "#FFE1E3",
      500: "#FFCACD",
      600: "#FFA4A9",
      700: "#F45C65",
      800: "#F34D57",
    },
    blue: {
      100: "#F6F7FC",
      200: "#EDEFF8",
      300: "#D7DBEB",
      400: "#BDC6E8",
      500: "#95A5E0",
      600: "#6F82C9",
      700: "#2F438D",
      800: "#031962",
      900: "#031142",
    },
    grey: {
      100: "#FFFFFF",
      200: "#F7F7F7",
      300: "#E9E9E9",
      400: "#C7C7C7",
      500: "#A6A6A6",
      600: "#848484",
      700: "#636363",
      800: "#414141",
      900: "#202020",
    },
  },
  "z-index": {
    gnb: Z_INDEX.BASE + Z_INDEX.ABOVE * 5,
    navbar: Z_INDEX.BASE + Z_INDEX.ABOVE * 5,
    sortModal: Z_INDEX.BASE + Z_INDEX.ABOVE * 4,
    imageIcon: Z_INDEX.BASE + Z_INDEX.ABOVE * 3,
    storeContent: Z_INDEX.BASE + Z_INDEX.ABOVE * 2,
  },
};

export default theme;
