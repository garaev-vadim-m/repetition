# 58. Length of Last Word

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given a string `s` consisting of words and spaces, return the length of the last word in the string. \
A word is a maximal substring consisting of non-space characters only.

### Decision

```js
/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function (s) {
  console.log(s.trim().split(' ').pop().length);
  return s.trim().split(' ').pop().length;
};
```
