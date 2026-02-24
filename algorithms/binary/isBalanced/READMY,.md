# 110. Balanced Binary Tree

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given a binary tree, determine if it is height-balanced.

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
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  let isBalance = true;

  const isNodeBalanced = (node) => {
    if (!node) return 0;
    const leftBalance = isNodeBalanced(node.left);
    const rightBalance = isNodeBalanced(node.right);
    if (!isBalance || Math.abs(leftBalance - rightBalance) > 1) {
      return (isBalance = false);
    }

    return Math.max(leftBalance, rightBalance) + 1;
  };

  isNodeBalanced(root);
  console.log(isNodeBalanced(root));

  return isBalance;
}
```
