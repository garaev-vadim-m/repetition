/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function (s) {
  if (!s.length) return false;
  const mapBrackers = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  const result = [];

  for (const string of s) {
    if (mapBrackers.has(string)) {
      if (result.pop() !== mapBrackers.get(string)) {
        return false;
      }
    } else {
      result.push(string);
    }
  }
  console.log(result.length === 0);

  return result.length === 0;
};
