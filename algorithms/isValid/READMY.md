# 20. Valid Parentheses

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Decision

```js
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
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

  return result.length === 0;
};
```
