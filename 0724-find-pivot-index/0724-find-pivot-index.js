/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0;
    for (let num of nums) sum += num;

    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        let right = sum - left - nums[i];
        if (left === right) return i;
        left += nums[i];
    }
    return -1;
};