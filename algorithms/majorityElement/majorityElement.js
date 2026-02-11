/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function (nums) {
  //   if (nums.length === 1) return nums[0];
  //   const [numsFilter] = nums.filter((value, index, arr) => arr.indexOf(value) !== index);
  //   return numsFilter;
  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};
