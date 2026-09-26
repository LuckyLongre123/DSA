var subsets = function (nums) {
    const result = [];
    findAllSubsets(nums, result);
    return result;
};

function findAllSubsets(nums, result, ans = []) {
    if (nums.length === 0) {
        result.push([...ans]);
        return;
    }

    let tm = nums[0];
    let nextNums = nums.slice(1);

    findAllSubsets(nextNums, result, [...ans]);
    findAllSubsets(nextNums, result, [...ans, tm]);
}