import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#F45C65" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
