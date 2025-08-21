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
          <link rel="icon" href="/icon.ico" />
          <link rel="apple-touch-icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
