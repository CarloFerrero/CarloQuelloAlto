export const romanConverter = (roman) => {
  const ROMAN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = ROMAN[roman[i]];
    const next = ROMAN[roman[i + 1]];
    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
};
