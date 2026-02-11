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
