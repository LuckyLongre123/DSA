/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums = []) {
    const n = nums.length;
    let i = 0;
    let j = n - 1;

    while (i < n - 1 && nums[i] <= nums[i + 1]) i++;
    if (i === n - 1) return 0;

    while (j > 0 && nums[j] >= nums[j - 1]) j--;
    if (i === 0 && j === n - 1) return n;


    let mn = Number.MAX_SAFE_INTEGER,
        mx = Number.MIN_SAFE_INTEGER;

    for (let x = i; x <= j; x++) {
        let num = nums[x];
        mn = Math.min(mn, num);
        mx = Math.max(mx, num);
    }

    while (i > 0 && nums[i - 1] > mn) i--;
    while (j < n - 1 && nums[j + 1] < mx) j++;

    return j - i + 1;
};