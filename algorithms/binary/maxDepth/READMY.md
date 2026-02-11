# 104. Maximum Depth of Binary Tree

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given the `root` of a binary tree, return its maximum depth.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Decision

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = function (root) {
  if (!root) return 0; //проверка на самое существование
  //у листа поднимаемся +1 , дальше берем слева сколько рекурсивно можем посмотреть вхождений и справай
  return 1 + Math.max(maxDepth(root?.left), maxDepth(root?.right));
};
```
