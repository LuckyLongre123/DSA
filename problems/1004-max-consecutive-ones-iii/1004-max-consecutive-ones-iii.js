/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let zeros = 0;
    let maxLen = 0;

    let l = 0;
    let r = 0;

    while (r < nums.length) {
        if (nums[r] === 0) zeros++;

        if (zeros > k) {
            if (nums[l] === 0) zeros--;
            l++;
        }

        if (zeros <= k) maxLen = Math.max(maxLen, (r - l + 1));
        r++;
    }
    return maxLen;
};