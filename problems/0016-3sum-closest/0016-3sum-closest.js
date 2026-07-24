/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);

    let min_diff = Number.MAX_SAFE_INTEGER;
    let closestSum = 0;

    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let left = i + 1,
            right = n - 1;

        while (left < right) {
            let curSum = nums[i] + nums[left] + nums[right];

            if (curSum === target) return curSum;

            let diff = Math.abs(curSum - target);
            if (diff < min_diff) {
                min_diff = diff;
                closestSum = curSum;
            }

            if (curSum > target) right--;
            else left++;
        }
    }

    return closestSum;
};
