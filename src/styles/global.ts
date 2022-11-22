import { css } from "@emotion/react";

import booksBackgroundImg from '@/assets/images/books_background.png';
import { theme } from "./theme";

export const globalStyles = css`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: inherit;
    width: inherit;
    font: 400 1rem Lato, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.neutral[700]};
    background-color: #dedede; // Design System Exception

    background-image: url(${booksBackgroundImg.src});
  }

  input,
  button {
    font: normal 1rem Lato, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.neutral[700]};
  }

  button {
    font-weight: 500;
  }

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 1.25;
  }

  h2 {
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 1.25;
  }

  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.25;
  }

  h4 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.25;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
`;
