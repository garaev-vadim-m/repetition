# 13. Roman to Integer

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

#### Data - Symbol = Value

I = 1 \
V = 5 \
X = 10 \
L = 50 \
C = 100 \
D = 500 \
M = 1000

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, `which is XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

`I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
`X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
`C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

### Decision

```js
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let result = 0;
  const romanData = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const chars = s.split('');
  for (const [index, char] of chars.entries()) {
    const current = romanData[char];
    const next = romanData[chars[index + 1]];
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};
```
