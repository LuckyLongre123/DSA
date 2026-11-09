/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
    let noDelete = arr[0];
    let oneDelete = 0;
    let ans = noDelete;

    for (let i = 1; i < arr.length; i++) {
        oneDelete = Math.max(oneDelete + arr[i], noDelete);
        noDelete = Math.max(arr[i], noDelete + arr[i]);

        ans = Math.max(ans, Math.max(oneDelete, noDelete));
    }
    return ans;
};