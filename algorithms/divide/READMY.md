# 29. Divide Two Integers

<span
style="color: #ffb700;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Medium
</span>

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, `8.345` would be truncated to `8`, and `-2.7335` would be truncated to `-2`.

Return the quotient after dividing `dividend` by _`divisor`_.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [$-2^{31}$, $2^{31}$ − 1]. For this problem, if the quotient is strictly greater than $2^{31}$ - 1, then return $-2^{31}$ - 1, and if the quotient is strictly less than $-2^{31}$, then return $-2^{31}$.

### Decision

```js
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
```
