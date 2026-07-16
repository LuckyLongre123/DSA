/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let freq1 = {};
    let freq2 = {};

    for (let ch of s) freq1[ch] = (freq1[ch] || 0) + 1;
    for (let ch of t) freq2[ch] = (freq2[ch] || 0) + 1;

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) return false;
    }

    return true;
};