/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let n = nums.length;
    if (n == 0) return [];
    if (n == 1) return [nums[0] * nums[0]];

    let i = -1;
    while (i < n && nums[++i] < 0);
    let j = i--;
    
    for (let i = 0; i < n; i++)
        nums[i] = nums[i] * nums[i];

    let resultArray = [];

    while (i >= 0 && j < n) {
        if (nums[i] < nums[j])
            resultArray.push(nums[i--]);
        else
            resultArray.push(nums[j++]);
    }

    while (i >= 0)
        resultArray.push(nums[i--]);
    while (j < n)
        resultArray.push(nums[j++]);

    return resultArray;
};