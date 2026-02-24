import { TreeNode } from '../libs/tree.js';
export const root = new TreeNode(3, 9, new TreeNode(20, 15, 7));
export const root1 = new TreeNode(
  2,
  null,
  new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))),
);

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
 * @return {boolean}
 */
function isBalanced(root) {
  let isBalance = true;

  const isNodeBalanced = (node) => {
    if (!node) return 0;
    const leftBalance = isNodeBalanced(node.left);
    const rightBalance = isNodeBalanced(node.right);
    if (Math.abs(leftBalance - rightBalance) > 1) {
      return Math.abs(leftBalance - rightBalance) > 1;
    }

    return Math.max(leftBalance, rightBalance) + 1;
  };

  isNodeBalanced(root);
  console.log(isNodeBalanced(root));
  return isBalance;
}

isBalanced(root);
isBalanced(root1);
