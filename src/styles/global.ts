import { css } from "@emotion/react";

import assetImg from '@/assets/images/image_14.png';

export const globalStyles = css`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: inherit;
    width: inherit;
    font: 400 1rem Ubuntu, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #212121;
    line-height: 1.5;
    background-color: #dedede;

    background-image: url(${assetImg.src}); // TODO fix opacity
  }

  input,
  button {
    font: normal 1rem Ubuntu, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #212121;
    font-weight: 500;
  }

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1.25;
  }

  h2 {
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 1.25;
  }

  h3 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.25;
  }

  h4 {
    font-weight: 600;
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

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: black; // TODO change
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #444444;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: gray; // TODO change
    transition: background 250ms;
  }
`;
