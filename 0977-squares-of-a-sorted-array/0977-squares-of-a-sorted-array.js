/**
 * @param {number[]} nums
 * @return {number[]}
 */

// function reverse(arr, i, j) {
//     while (i < j) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j--;
//     }
// }

// var sortedSqrs = function (nums) {
//     // egde cases
//     let n = nums.length;
//     if (n == 0) return [];
//     if (n == 1) return [nums[0] * nums[0]];

//     // find first non-negative elements's index
//     let i = -1;
//     while (i < n && nums[++i] < 0);

//     // reverse all negative elements
//     reverse(nums, 0, i - 1);

//     // sqr all elements
//     for (let i = 0; i < n; i++) nums[i] = nums[i] * nums[i];

//     // Merge the negative and non- negative elements in a sorted result array
//     let j = 0;
//     let k = i;
//     let result = [];
//     while (j < k && i < n) {
//         if (nums[i] < nums[j]) result.push(nums[i++]);
//         else result.push(nums[j++]);
//     }

//     // Push the remaining elements into the result array
//     while (j < k) result.push(nums[j++]);
//     while (i < n) result.push(nums[i++]);

//     // return the result array
//     return result;
// }


// var sortedSquares = function (nums) {
//     let n = nums.length;
//     if (n == 0) return [];
//     if (n == 1) return [nums[0] * nums[0]];

//     let i = -1;
//     while (i < n && nums[++i] < 0);
//     let j = i--;

//     for (let i = 0; i < n; i++)
//         nums[i] = nums[i] * nums[i];

//     let resultArray = [];

//     while (i >= 0 && j < n) {
//         if (nums[i] < nums[j])
//             resultArray.push(nums[i--]);
//         else
//             resultArray.push(nums[j++]);
//     }

//     while (i >= 0)
//         resultArray.push(nums[i--]);
//     while (j < n)
//         resultArray.push(nums[j++]);

//     return resultArray;
// };



var sortedSquares = function (nums) {
    let n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;
        } else {
            result[i] = rightSquare;
            right--;
        }
    }

    return result;
};