/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const preorderTraversal = function (root) {
  return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
};

export const postorderTraversal = function (root) {
  return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : [];
};
