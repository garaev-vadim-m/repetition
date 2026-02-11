## Plaindrom

<span
style="color: #46c6c2;
 padding: 4px 12px;
 border-radius: 16px;
 background-color: #ffffff1a;
 font-size: 12px;
 line-height: 16px">
Easy
</span>

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

> A -> 1 \
> B -> 2 \
> C -> 3 \
> ... \
> Z -> 26 \
> AA -> 27 \
> AB -> 28 \
> ...

```js
/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  columnNumber = columnNumber - 1;
  if (columnNumber >= 0 && columnNumber < 26) {
    return String.fromCharCode(65 + columnNumber);
  }
  return convertToTitle(parseInt(columnNumber / 26)) + convertToTitle((columnNumber % 26) + 1);
};
```
