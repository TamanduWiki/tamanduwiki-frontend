import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import loadingImg from "@/assets/animated/loading_balls_black.svg";

import Flex from "@/components/common/Flex";

import { AuthProvider } from "@/contexts/auth/AuthProvider";

import { globalStyles } from "@/styles";
import { theme } from "@/styles/theme";
import "@/styles/fonts.css";
import "@/styles/root-css.css";
import "react-toastify/dist/ReactToastify.css";

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

        <ToastContainer />

        {loading ? (
          <Flex
            align="center"
            justify="center"
            style={{ height: "100vh", width: "100vw" }}
          >
            <Flex
              bgColor="neutral_100"
              style={{ padding: `0 ${theme.spacing.sm}` }}
            >
              <Image src={loadingImg as string} alt="loading_img" width={64} />
            </Flex>
          </Flex>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
