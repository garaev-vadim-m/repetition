# 14. Longest Common Prefix

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Decision

```js
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
```
