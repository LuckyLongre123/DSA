/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let sum = 0;
    let ans = 0;

    let map = new Map();
    map.set(0, 1);

    for (let num of nums) {
        sum += num;
        let q = sum - k;
        ans += map.get(q) || 0;

        let prevSumPrev = map.get(sum) || 0;
        map.set(sum, ++prevSumPrev);
    }
    return ans;
}