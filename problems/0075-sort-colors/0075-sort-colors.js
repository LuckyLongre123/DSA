/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let n = nums.length;

  let low = 0,
    mid = 0,
    high = n - 1;

  while (mid <= high) {
    let num = nums[mid];
    if (num === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      mid++;
      low++;
    }

    if (num === 1) mid++;

    if (num === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};