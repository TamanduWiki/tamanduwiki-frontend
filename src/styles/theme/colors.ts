export type ColorToken = 'primary'
  | 'error'
  | 'warning'
  | 'success'
  | 'neutral_100'
  | 'neutral_200'
  | 'neutral_300'
  | 'neutral_400'
  | 'neutral_500'
  | 'neutral_600'
  | 'neutral_700';

export type ThemeColors = { [key in ColorToken]: string };

export const colors: ThemeColors = {
  primary: "#5AC229",
  error:   "#E04424",
  warning: "#EBB64C",
  success: "#67CD37",

  neutral_100: "#FFFFFF",
  neutral_200: "#E9E9E9",
  neutral_300: "#C1C1C1",
  neutral_400: "#969696",
  neutral_500: "#6b6b6b",
  neutral_600: "#444444",
  neutral_700: "#2f2f2f",
};
