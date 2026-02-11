export const string1 = 'A man, a plan, a canal: Panama';
export const string2 = 'race a car';
export const string3 = ' ';
export const string4 = '0P';

/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function (s) {
  const original = s.replace(/[^a-zA-Z0-9]+/g, '').toLocaleLowerCase();
  const copy = original.split('').reverse().join('');
  return original === copy;
};

/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindromeNumber = function (x) {
  const stringX = String(x).split('').reverse().join('');
  if (stringX === String(x)) {
    return true;
  }
  return false;
};
