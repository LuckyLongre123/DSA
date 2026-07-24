/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums = [], target) {
  nums.sort((a, b) => a - b);

  let n = nums.length;
  let result = [];

  for (let a = 0; a < n - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;

    for (let b = a + 1; b < n - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let c = b + 1,
        d = n - 1;

      while (c < d) {
        let sum = nums[a] + nums[b] + nums[c] + nums[d];

        if (sum === target) {
          result.push([nums[a], nums[b], nums[c], nums[d]]);
          c++;
          d--;

          while (nums[c] === nums[c - 1]) c++;
          while (nums[d] === nums[d + 1]) d--;
        } else if (sum > target) d--;
        else c++;
      }
    }
  }
  return result;
};
