# 9 Plaindrom number

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

### Decision

```js
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
```

# 125. Valid Palindrome

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **_palindrome_**, or `false` otherwise.

### Decision

```js
/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function (s) {
  const original = s.replace(/[^a-zA-Z0-9]+/g, '').toLocaleLowerCase();
  const copy = original.split('').reverse().join('');
  return original === copy;
};
```
