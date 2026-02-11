# 94. Binary Tree Inorder Traversal

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given the `root` of a binary tree, return the inorder traversal of its nodes' values.

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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const result = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return result;
};
```
