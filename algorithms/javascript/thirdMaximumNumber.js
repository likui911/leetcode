/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  let set = new Set(nums);
  let arr = Array.from(set);
  if (arr.length < 3) {
    return arr[0];
  }
  return arr[2];
};
