/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  for (let i = 1; i < arr.length; ++i) {
    let max = arr[i];
    for (let j = i; j < arr.length; ++j) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    arr[i - 1] = max;
  }
  arr[arr.length - 1] = -1;
  return arr;
};
