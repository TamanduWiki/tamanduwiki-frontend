import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Head from 'next/head';
import Image from 'next/image';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import loadingImg from "@/assets/animated/loading_balls_green.svg";

import Flex from "@/components/common/Flex";

import { globalStyles } from "@/styles";
import { theme } from '@/styles/theme';
import "@/styles/fonts.css";
import { AuthProvider } from "@/contexts/auth/AuthProvider";

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
        <Head><link rel="icon" href="/images/ufabcwiki_icon.ico" /></Head>

        <Global styles={globalStyles} />

        <Toaster position="top-right" toastOptions={{ duration: 8000 }}/>

        {loading
          ? (
            <Flex align="center" justify="center" style={{ height: '100vh', width: '100vw' }}>
              <Image src={loadingImg as string} alt="loading_img" />
            </Flex>
          )
          : <Component {...pageProps} />
        }
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
