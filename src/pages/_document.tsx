import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{}}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#18191A" />
          <meta name="description" content="CLK Construction" />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CLK Construction" />
          <meta property="og:description" content="CLK Construction" />
          <meta property="og:url" content="clkconstructioninc.com" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon.svg"
            sizes="any"
          />
          <link rel="mask-icon" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="any"
            href="/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-title" content="CLK" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="/favicon4848.png" sizes="48x48" />
          <link rel="icon" href="/favicon.svg" sizes="any" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./favicon16x16.png"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
