export type ThemeSpacingOption =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "3xl"
  | "4xl"
  | "5xl";

export type ThemeSpacing = { [key in ThemeSpacingOption]: string };

export const spacing: ThemeSpacing = {
  xxs: "0.25rem",
  xs: "0.50rem",
  sm: "0.75rem",
  md: "1.00rem",
  lg: "1.50rem",
  xl: "2.00rem",
  xxl: "2.50rem",
  "3xl": "3.00rem",
  "4xl": "3.50rem",
  "5xl": "4.00rem",
};
