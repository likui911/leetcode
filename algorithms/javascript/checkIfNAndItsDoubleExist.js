/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let s1 = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (s1.has(arr[i] / 2) || s1.has(arr[i] * 2)) {
      return true;
    }
    s1.add(arr[i]);
  }
  return false;
};
