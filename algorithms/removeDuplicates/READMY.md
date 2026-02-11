# 26. Remove Duplicates from Sorted Array

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in `nums` to be `k​​​​​​​​​​​​​​`. After removing duplicates, return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique numbers in sorted order. The remaining elements beyond index `k - 1` can be ignored.

If all assertions pass, then your solution will be accepted.

### Decision

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let k = nums[0];
  let writeIndex = 1;
  for (const num of nums.slice(1)) {
    if (num !== k) {
      nums[writeIndex] = num;
      writeIndex++;
      k = num;
    }
  }
  return writeIndex;
};
```
