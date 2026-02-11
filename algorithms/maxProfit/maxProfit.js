export const array1 = [7, 1, 5, 3, 6, 4];
export const array2 = [7, 6, 4, 3, 1];
export const array3 = [1, 2];
export const array4 = [2, 4, 1];
/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price; // нашли дешевле — запомнили
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
};
