export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// export default root;

export const symmetric = new TreeNode(1, new TreeNode(2, 3, 4), new TreeNode(2, 4, 3));
export const symmetric2 = new TreeNode(1, new TreeNode(2, null, 3), new TreeNode(2, null, 3));

export const sortedArray1 = new TreeNode(0, new TreeNode(-3, -10, null), new TreeNode(9, 5, null));
export const sortedArray2 = new TreeNode(0, new TreeNode(-10, null, -3), new TreeNode(9, 5, null));
export const sortedArray3 = new TreeNode(3, 1, null);
export const sortedArray4 = new TreeNode(1, null, 3);

export const preorderTraversal1 = new TreeNode(1, null, new TreeNode(2, 3, null));
export const postorderTraversal1 = new TreeNode(1, null, new TreeNode(2, 3, null));
