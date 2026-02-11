/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = function (nums, target) {
  const result = nums.findIndex((element) => element >= target);
  return result === -1 ? nums.length : result;
};

/**
 * @description hack version
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsertHack = function (nums, target) {
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
