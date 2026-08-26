/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let map = new Map();

    let low = 0;
    let res = 0;

    for (let high = 0; high < n; high++) {
        let highChar = s[high];
        map.set(highChar, (map.get(highChar) || 0) + 1);

        let len = high - low + 1;
        while (map.size < len) {
            let lowChar = s[low];
            map.set(lowChar, map.get(lowChar) - 1);
            if (map.get(lowChar) === 0) {
                map.delete(lowChar);
            }
            low++;

            len = high - low + 1;
        }
        len = high - low + 1;
        res = Math.max(res, len);
    }
    return res;
};
