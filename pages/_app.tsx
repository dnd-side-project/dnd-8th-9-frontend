import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/Global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
