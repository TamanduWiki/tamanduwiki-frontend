export const containsLowercaseChar = (str: string) =>
  new RegExp("(?=.*[a-z])").test(str);

export const containsUppercaseChar = (str: string) =>
  new RegExp("(?=.*[A-Z])").test(str);

export const containsNumber = (str: string) =>
  new RegExp("(?=.*[0-9])").test(str);

export const containsSpecialChar = (str: string) =>
  new RegExp("(?=.*[^A-Za-z0-9])").test(str);

export const containsAtLeastEightChars = (str: string) =>
  new RegExp("(?=.{8,})").test(str);
