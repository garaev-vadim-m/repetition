# Happy Number

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

### Write an algorithm to determine if a number `n` is happy.

#### A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.
- Return `true` if `n` is a happy number, and `false` if not.

### Decision

```js
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
```
