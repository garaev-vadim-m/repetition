# 1929. Concatenation of Array

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given an integer array `nums` of length `n`, you want to create an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i `<` n` (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

_Return the array_ `ans`.

### Decision

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const getConcatenation = function (nums) {
  return nums.concat(nums);
};
```
