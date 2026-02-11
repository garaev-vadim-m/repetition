/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement = function (nums, val) {
  let writeIndex = 0;
  for (const num of nums) {
    if (num !== val) {
      nums[writeIndex] = num;
      writeIndex++;
    }
  }
  return writeIndex;
};
