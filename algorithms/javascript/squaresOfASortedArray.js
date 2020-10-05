/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (arr) {
  return arr
    .map((x) => x * x)
    .sort((a, b) => {
      return a - b;
    });
};
