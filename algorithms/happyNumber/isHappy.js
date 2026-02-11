function handleHappy(n) {
  const num = String(n)
    .split('')
    .map((value) => value ** 2)
    .reduce((a, b) => a + b);
  return num;
}

/**
 * @param {number} n
 * @return {boolean}
 */

export const isHappy = function (n) {
  const seen = new Set();
  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);
    n = handleHappy(n);
  }

  return true;
};
