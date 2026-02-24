import { TreeNode } from '../libs/tree.js';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root || (!root.left && !root.right)) {
    return root ? 1 : 0;
  }

  if (!root.left || !root.right) {
    return 1 + minDepth(root.left || root.right);
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
