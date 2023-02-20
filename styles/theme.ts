import { Theme } from "@emotion/react";

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
  },
};

export default theme;

/* 
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
    dark: {
      100: "#7C87AD",  => navy 200
      300: "#4C536D",  => navy 300
      500: "#0E1B47",  => navy 400
    },
    gray: {
      50: "#F0F0F0",    => white 300
      70: "#F2F2F2",     => white 200
      80: "#E9E9E9",    => white 600
      90: "#EEEEEE",     => white 500
      95: "#EFEFEF",    => white 400
      100: "#D7D7D7",   => gray 100
      200: "#A2A2A2",   => gray 200
      300: "#A5A5A5",   => gray 300
      500: "#3C3C3C",   => gray 500
      700: "#525252",   => gray 400
      900: "#202020",   => black
    },
    background: "#F7F8FA",   => navy 100
    black: "#000",    => 없어짐
    white: "#fff",    => white 100
 */
