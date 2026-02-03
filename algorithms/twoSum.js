/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
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