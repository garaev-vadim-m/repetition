# 108. Convert Sorted Array to Binary Search Tree

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given an integer array `nums` where the elements are sorted in **ascending order**, convert it to a height-balanced binary search tree.

### Decision

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  const rootNodeIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[rootNodeIndex]);
  root.left = sortedArrayToBST(nums.slice(0, rootNodeIndex));
  root.right = sortedArrayToBST(nums.slice(rootNodeIndex + 1));
  return root;
};
```
