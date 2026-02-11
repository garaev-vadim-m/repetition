/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = function (root) {
  if (!root) return 0; //проверка на самое существование
  //у листа поднимаемся +1 , дальше берем слева сколько рекурсивно можем посмотреть вхождений и справай
  return 1 + Math.max(maxDepth(root?.left), maxDepth(root?.right));
};
