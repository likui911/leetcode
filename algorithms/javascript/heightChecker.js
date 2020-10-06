/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let arr = [...heights];
  arr.sort((a, b) => a - b);

  let cnt = 0;
  for (let i = 0; i < heights.length; ++i) {
    if (arr[i] !== heights[i]) {
      cnt++;
    }
  }
  return cnt;
};
