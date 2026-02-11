/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function (nums) {
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
