export const genRandomString = () =>
  (Math.random() + 1).toString(36).substring(Math.random() * 10);

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
