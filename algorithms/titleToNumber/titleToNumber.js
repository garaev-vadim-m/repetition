/**
 * @param {string} columnTitle
 * @return {number}
 */
export const titleToNumber = function (columnTitle) {
  let total = 0;
  [...columnTitle].map((x) => (total = total * 26 + (x.charCodeAt(0) - 64)));
  return total;
};
