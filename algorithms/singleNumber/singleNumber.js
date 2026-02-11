export const nums1 = [2, 2, 1]; //1
export const nums2 = [4, 1, 2, 1, 2]; //4
export const nums3 = [1]; //1
export const nums4 = [1, 2, 3, 3, 1, 3, 1]; //5

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
