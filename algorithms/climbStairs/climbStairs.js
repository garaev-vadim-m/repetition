/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let prev = 1;
  let curr = 2;

  for (const _ of Array(n - 2)) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  console.log(curr);
  return curr;
};
