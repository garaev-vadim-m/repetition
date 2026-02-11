/**
 * @param {string} s
 * @return {number}
 */
export const romanToInt = function (s) {
  let result = 0;
  const romanData = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const chars = s.split('');
  for (const [index, char] of chars.entries()) {
    const current = romanData[char];
    const next = romanData[chars[index + 1]];
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};
