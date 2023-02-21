import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyle from "@/styles/Global";
import theme from "@/styles/theme";
import Layout from "@/components/shared/Layout/Layout";
import GNB from "@/components/shared/GNB/GNB";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
  import("@/mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
          <GNB />
        </Layout>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}