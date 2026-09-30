/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    const ans = [];
    getPerm(nums, 0, ans);
    return ans;

};


function getPerm(nums, idx, ans) {
    if (idx === nums.length) {
        ans.push([...nums]);
        return;
    }

    for (let i = idx; i < nums.length; i++) {
        console.log(nums)
        let tm = nums[i];
        nums[i] = nums[idx];
        nums[idx] = tm;

        getPerm(nums, idx + 1, ans);

        tm = nums[i];
        nums[i] = nums[idx];
        nums[idx] = tm;
    }
}