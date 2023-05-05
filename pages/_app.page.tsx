import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyle from "@/styles/Global";
import theme from "@/styles/theme";
import SubLayout from "@/components/shared/Layout/SubLayout";
import MainLayout from "@/components/shared/Layout/MainLayout";

type NextPageWithLayout<P, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{ dehydratedState: DehydratedState }> & {
  Component: NextPageWithLayout<{ dehydratedState: DehydratedState }>;
};

if (process.env.NODE_ENV === "development") {
  import("@/mocks");
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout ?? (page => <SubLayout>{page}</SubLayout>);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
          <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
