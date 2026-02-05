export const number1 = 1;
export const number2 = 701;
export const number3 = 318;

/**
 * @param {number} columnNumber
 * @return {string}
 */
export const convertToTitle = function (columnNumber) {
  columnNumber = columnNumber - 1;
  if (columnNumber >= 0 && columnNumber < 26) {
    return String.fromCharCode(65 + columnNumber);
  }
  return convertToTitle(parseInt(columnNumber / 26)) + convertToTitle((columnNumber % 26) + 1);
};
