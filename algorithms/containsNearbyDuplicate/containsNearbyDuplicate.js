/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const list = new Map();

  for (const [index, num] of nums.entries()) {
    if (list.has(nums[index]) && index - list.get(nums[index]) <= k) {
      return true;
    }
    list.set(nums[index], index);
  }

  return false;
};
