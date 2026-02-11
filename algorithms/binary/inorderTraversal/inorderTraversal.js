import { TreeNode } from '../libs/tree.js';

export const root = new TreeNode(8, new TreeNode(5, 3, 1), null);

export const inorderTraversal = (root) => {
  const result = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    result.push(node);
    dfs(node.right);
  };
  dfs(root);
  return result;
};
