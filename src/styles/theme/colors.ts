export type ColorToken =
  | "primary"
  | "primary15p"
  | "error"
  | "warning"
  | "success"
  | "info"
  | "neutral_50"
  | "neutral_100"
  | "neutral_200"
  | "neutral_300"
  | "neutral_400"
  | "neutral_500"
  | "neutral_600"
  | "neutral_700"
  | "neutral_800"
  | "green_50"
  | "green_100"
  | "green_200"
  | "green_300"
  | "green_400"
  | "green_500"
  | "green_600"
  | "green_700"
  | "green_800";

export type ThemeColors = { [key in ColorToken]: string };

export const colors: ThemeColors = {
  primary: "#5AC229",
  error: "#EB0A68",
  warning: "#BE9400",
  success: "#5AC229", // todo ??
  info: "#3581cc",
  primary15p: "#5AC22915",

  neutral_50: "#FFFFFF",
  neutral_100: "#ECECEE",
  neutral_200: "#A4A5AC",
  neutral_300: "#4B4E5C",
  neutral_400: "#2B2D3E",
  neutral_500: "#212332",
  neutral_600: "#1c1e2d",
  neutral_700: "#111219",
  neutral_800: "#000000",

  green_50: "#5AC229", // todo
  green_100: "#5AC229", // todo
  green_200: "#A8DC8F",
  green_300: "#5AC229", // todo
  green_400: "#5AC229",
  green_500: "#43911F",
  green_600: "#5AC229", // todo
  green_700: "#5AC229", // todo
  green_800: "#5AC229", // todo
};
