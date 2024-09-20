import { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import * as gtag from "lib/gtag";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        main {
          height: 100%;
          max-width: 100%;
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
