# 35. Search Insert Position

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

### Decision

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  const result = nums.findIndex((element) => element >= target);
  return result === -1 ? nums.length : result;
};
```

## Hack version

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  const copyNums = nums;
  console.log('find', nums.indexOf(target));
  if (nums.indexOf(target) === -1) {
    copyNums.push(target);
  }
  console.log(copyNums);
  const result = copyNums.sort((a, b) => a - b).indexOf(target);
  console.log(copyNums);
  // console.log(result);
  return result;
};
```
