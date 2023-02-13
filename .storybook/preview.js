import { ThemeProvider } from "@emotion/react";
import * as NextImage from "next/image";

import theme from "../styles/theme";
import GlobalStyle from "../styles/Global";

NextImage.defaultProps = {
  unoptimized: true,
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
