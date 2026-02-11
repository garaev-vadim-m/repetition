# 144. Binary Tree Preorder Traversal

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given the `root` of a binary tree, return the preorder traversal of its nodes' values.

### Decision

```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const preorderTraversal = function (root) {
  return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
};
```

# 145. Binary Tree Postorder Traversal

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given the `root` of a binary tree, return the postorder traversal of its nodes' values.

### Decision

```js
const postorderTraversal = function (root) {
  return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : [];
};
```
