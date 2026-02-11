/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function (s) {
  console.log(s.trim().split(' ').pop().length);
  return s.trim().split(' ').pop().length;
};
