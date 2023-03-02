/* eslint-disable func-names */
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyle from "@/styles/Global";
import theme from "@/styles/theme";
import SubLayout from "@/components/shared/Layout/SubLayout";
import MainLayout from "@/components/shared/Layout/MainLayout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
  import("@/mocks");
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    function (page) {
      return <SubLayout>{page}</SubLayout>;
    };

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
