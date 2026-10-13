/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0;

    let l = 0;
    let prod = 1;
    let count = -1;

    for (let r = 0; r < nums.length; r++) {
        prod *= nums[r];

        while (prod >= k) prod /= nums[l++];

        count += r - l + 1;
    }
    return count + 1;
};
