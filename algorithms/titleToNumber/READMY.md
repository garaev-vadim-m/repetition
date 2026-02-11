# 171. Excel Sheet Column Number

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given a string `columnTitle` that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

> A -> 1 \
> B -> 2 \
> C -> 3 \
> ... \
> Z -> 26 \
> AA -> 27 \
> AB -> 28 \
> ...

### Decision

```js
/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
  let total = 0;
  [...columnTitle].map((x) => (total = total * 26 + (x.charCodeAt(0) - 64)));
  return total;
};
```
