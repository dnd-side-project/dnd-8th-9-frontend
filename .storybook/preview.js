import * as NextImage from "next/image";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { RouterContext } from "next/dist/shared/lib/router-context";

import theme from "../styles/theme";
import GlobalStyle from "../styles/Global";

initialize();

NextImage.defaultProps = {
  unoptimized: true,
};

const queryClient = new QueryClient();

export const decorators = [
  mswDecorator,
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
