export type ThemeSpacingOption =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | "10xl";

export type ThemeSpacing = { [key in ThemeSpacingOption]: string };

export const spacing: ThemeSpacing = {
  xxs: "0.25rem",
  xs: "0.50rem",
  sm: "0.75rem",
  md: "1.00rem",
  lg: "1.25rem",
  xl: "1.50rem",
  "2xl": "1.75rem",
  "3xl": "2.00rem",
  "4xl": "2.50rem",
  "5xl": "3.00rem",
  "6xl": "3.50rem",
  "7xl": "4.00rem",
  "8xl": "5.00rem",
  "9xl": "6.50rem",
  "10xl": "8.00rem",
};
