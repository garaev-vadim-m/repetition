# 217. Contains Duplicate

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

### Decision

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const sArr = [...new Set(nums)].length;
  console.log(!(nums.length === sArr));
  return !(nums.length === sArr);
};
```
