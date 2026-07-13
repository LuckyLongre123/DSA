/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // 1'st sol
    // nums1.splice(m, n, ...nums2)
    // nums1.sort((a, b) => a - b)

    // 2nd sol
    let copy = [...nums1];

    let i = 0, j = 0, a = 0;
    while (i < m && j < n) {
        console.log(copy[i], nums2[j])
        if (copy[i] <= nums2[j]) nums1[a++] = copy[i++]
        else
            nums1[a++] = nums2[j++]
    }
    while(i < m)
    nums1[a++] = copy[i++];
    while(j < n)
    nums1[a++] = nums2[j++];

};
