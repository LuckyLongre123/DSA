/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let n = nums.length;
    let cur_sum = 0;
    let min_len = n + 1;

    let s = 0;
    for (let i = 0; i < n; i++) {
        cur_sum += nums[i];

        while (cur_sum >= target) {
            min_len = Math.min(min_len, i - s + 1);
            cur_sum -= nums[s++];
        }
    }
    return min_len > n ? 0 : min_len;
};