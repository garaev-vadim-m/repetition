/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
export const divide = function (dividend, divisor) {
  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  if (dividend === MIN_INT && divisor === -1) {
    return MAX_INT;
  }
  return Math.trunc(dividend / divisor);
};
