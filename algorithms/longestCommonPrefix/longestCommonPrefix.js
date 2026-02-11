/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let prefix = '';
  const strsReduce = strs.reduce((a, b) => (a.length <= b.length ? a : b));

  for (const str of strsReduce) {
    const nextPrefix = prefix + str;

    const slices = strs.map((value) => value.slice(0, nextPrefix.length));
    if (new Set(slices).size === 1) {
      prefix = nextPrefix;
    } else {
      break;
    }
  }

  return prefix;
};
