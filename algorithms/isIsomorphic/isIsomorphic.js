const s1 = 'egg';
const t1 = 'add';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const hashMapS = {};
  const hashMapT = {};

  for (let index = 0; index < s.length; index++) {
    let sChar = s[index];
    let tChar = t[index];

    if ((hashMapS[sChar] && hashMapS[sChar] !== tChar) || (hashMapT[tChar] && hashMapT[tChar] !== sChar)) {
      return false;
    }

    hashMapS[sChar] = tChar;
    hashMapT[tChar] = sChar;
  }

  return true;
};
