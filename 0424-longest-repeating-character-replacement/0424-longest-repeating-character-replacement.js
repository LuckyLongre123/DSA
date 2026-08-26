/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let n = s.length;
    let res = 0;

    let low = 0;
    let freq = new Array(256).fill(0);

    for (let high = 0; high < n; high++) {
        freq[s.charCodeAt(high)]++;

        let diff = high - low + 1 - getMaxFreq(freq);

        while (diff > k) {
            freq[s.charCodeAt(low)]--;
            low++;

            diff = high - low + 1 - getMaxFreq(freq);
        }
        res = Math.max(res, high - low + 1);
    }

    return res;
};

function getMaxFreq(arr = []) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
