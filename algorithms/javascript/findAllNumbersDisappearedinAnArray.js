/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let arr = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; ++i) {
    arr[nums[i] - 1] += 1;
  }
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 0) {
      res.push(i + 1);
    }
  }
  return res;
};
