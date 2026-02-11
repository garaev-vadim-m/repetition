# 136. Single Number

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given a **non-empty** array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

### Decision

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = function (nums) {
  if (nums.length === 1) return 1;
  const duplicateNum = {};
  for (const [index, num] of nums.entries()) {
    if (duplicateNum[num]) {
      duplicateNum[num] = duplicateNum[num] + 1;
      continue;
    }
    duplicateNum[num] = 1;
  }
  //   console.log(Object.keys(duplicateNum).find((value) => duplicateNum[value] === 1));
  return +Object.keys(duplicateNum).find((value) => duplicateNum[value] === 1);
};
```
