# 66. Plus One

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. \

Increment the large integer by one and return the resulting array of digits.

### Decision

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
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
```
