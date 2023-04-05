import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Flex from "@/components/common/Flex";

import { AuthProvider } from "@/contexts/auth/AuthProvider";

import { globalStyles } from "@/styles";
import { theme } from "@/styles/theme";
import "@/styles/fonts.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/override_toastify_styles.css";

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="icon" href="/images/ufabcwiki_icon.ico" />
        </Head>

        <Global styles={globalStyles} />

        <ToastContainer theme="dark" />

        {loading ? (
          <Flex
            align="center"
            justify="center"
            style={{ height: "100vh", width: "100vw" }}
          >
            <Image
              src="/images/loading_gears.svg"
              alt="loading_img"
              width={48}
              height={48}
            />
          </Flex>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
