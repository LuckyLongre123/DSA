/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let write = 0;

    for (let read = 1; read < nums.length; read++)
    if (nums[read] !== nums[write])
        nums[++write] = nums[read];
    return write + 1;

};