# 67. Add Binary

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given two binary strings a and b, return their sum as a binary string.

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
```
