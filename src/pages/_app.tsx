import Head from 'next/head';
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";

import loadingImg from "@/assets/animated/page_loading_outlined.svg";

import { globalStyles } from "@/styles";
import "@/styles/fonts.css";
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    <>
      {/* <Head><link rel="icon" href="/images/bacchi-dev-icon.ico" /></Head> */}

      <Global styles={globalStyles} />

      {loading ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw' }}><Image src={loadingImg} alt="loading_img"/></div> : <Component {...pageProps} />}
      {/* <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider> */}
    </>
  );
};

export default App;
