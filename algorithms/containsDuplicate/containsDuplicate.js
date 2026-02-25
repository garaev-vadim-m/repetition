/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const sArr = [...new Set(nums)].length;
  console.log(!(nums.length === sArr));
  return !(nums.length === sArr);
};
