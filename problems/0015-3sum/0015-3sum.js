/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort((a, b) => a - b);

    let result = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (i > 0)
            if (nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = n - 1;
        const total = -1 * nums[i];

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum === total) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (nums[left] === nums[left - 1]) left++;
                while (nums[right] === nums[right + 1]) right--;
            }
            else if (sum > total) right--;
            else left++;
        }
    }
    return result;
};