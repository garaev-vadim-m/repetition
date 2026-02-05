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
export const maxDepth = function (root) {
  if (!root) return 0; //проверка на самое существование
  //у листа поднимаемся +1 , дальше берем слева сколько рекурсивно можем посмотреть вхождений и справай
  return 1 + Math.max(maxDepth(root?.left), maxDepth(root?.right));
};

export const inter = (root) => {
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

function letCheck(p, q) {
  //если левая часть ровна null и правая null то верно
  if (p == null && q == null) return true;
  //Если они не подошли к прерыдущей проверке
  //Проверяем что значение l и r не равный null, или l ровно null, а right не ровно, собственно в левом узле нет значения, в правом есть или данные левого и правого не равны
  if ((p != null && q == null) || (p == null && q != null) || p.val !== q.val) return false;
  //И собственно вызываем рекурсивно
  return letCheck(p.left, q.right) && letCheck(p.right, q.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isSymmetric = function (root) {
  if (root == null) return true;
  return letCheck(root.left, root.right);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export const sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  const rootNodeIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[rootNodeIndex]);
  root.left = sortedArrayToBST(nums.slice(0, rootNodeIndex));
  root.right = sortedArrayToBST(nums.slice(rootNodeIndex + 1));
  return root;
};

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
