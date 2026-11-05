/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    const { maxSum, minSum, totalSum } = kadaneBoth(nums);

    if (totalSum === minSum) {
        return maxSum;
    }

    return Math.max(maxSum, totalSum - minSum);
};

function kadaneBoth(nums) {
    let totalSum = nums[0];

    let maxBest = totalSum;
    let maxSum = totalSum;

    let minBest = totalSum;
    let minSum = totalSum;
    for (let i = 1; i < nums.length; i++) {
        const val = nums[i];
        totalSum += val;

        const currentMaxBest = maxBest + val;
        maxBest = val > currentMaxBest ? val : currentMaxBest;
        if (maxBest > maxSum) maxSum = maxBest;

        const currentMinBest = minBest + val;
        minBest = val < currentMinBest ? val : currentMinBest;
        if (minBest < minSum) minSum = minBest;
    }

    return { maxSum, minSum, totalSum };
}
