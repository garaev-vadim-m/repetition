/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const getConcatenation = function (nums) {
  //return nums, ...nums]
  return nums.concat(nums);
};
