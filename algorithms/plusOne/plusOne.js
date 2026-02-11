/**
 * @param {number[]} digits
 * @return {number[]}
 */
export const plusOne = function (digits) {
  const result = [];
  let carry = 1;

  for (const a of digits.slice().reverse()) {
    const sum = a + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry) result.unshift(carry);
  console.log(result);
  return result;
};
