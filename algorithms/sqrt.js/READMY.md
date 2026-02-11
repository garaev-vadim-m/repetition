# 69. Sqrt(x)

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

### Decision

```js
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  return Math.trunc(Math.sqrt(x));
};
```
