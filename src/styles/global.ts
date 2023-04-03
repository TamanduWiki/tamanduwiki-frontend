import { css } from "@emotion/react";

import { theme } from "./theme";

export const globalStyles = css`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: inherit;
    width: inherit;
    font: 400 1rem WorkSans, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.neutral_50};
    background-color: ${theme.colors.neutral_700};
  }

  input,
  textarea,
  button {
    font: normal 1rem WorkSans, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.neutral_700};
  }

  .Toastify__toast {
    line-height: 1.25;
    font: 400 1rem WorkSans, sans-serif;
    border-radius: 0;
  }

  button {
    font-weight: 500;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.25;
  }

  h2 {
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.25;
  }

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.25;
  }

  h4 {
    font-weight: 600;
    font-size: 1.25rem;
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
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.neutral_300};
  }
`;
