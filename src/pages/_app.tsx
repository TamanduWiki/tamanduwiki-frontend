import Head from 'next/head';
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";

import { globalStyles } from "@/styles";
// import "@/styles/fonts.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head><link rel="icon" href="/images/bacchi-dev-icon.ico" /></Head> */}

      <Global styles={globalStyles} />

      <Component {...pageProps} />
      {/* <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider> */}
    </>
  );
};

export default App;
