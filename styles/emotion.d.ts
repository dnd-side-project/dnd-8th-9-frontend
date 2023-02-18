import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fontSizes: {
      10: string;
      12: string;
      14: string;
      16: string;
      18: string;
      20: string;
      22: string;
      24: string;
      26: string;
      28: string;
      30: string;
      32: string;
    };
    colors: {
      primary: string;
      secondary: string;
      dark: {
        100: string;
        300: string;
        500: string;
      };
      gray: {
        0: string;
        50: string;
        100: string;
        200: string;
        300: string;
        500: string;
      };
      black: string;
      white: string;
    };
  }
}
