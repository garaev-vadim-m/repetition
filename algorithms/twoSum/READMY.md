# 1. Two sum

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Decision

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
  for (const [index, num] of nums.entries()) {
    // console.log(num, index);
    for (const [indexTwo, numTwo] of nums.entries()) {
      if (index !== indexTwo && num + numTwo === target) {
        console.log([index, indexTwo]);
        return [index, indexTwo];
      }
    }
  }
};
```
