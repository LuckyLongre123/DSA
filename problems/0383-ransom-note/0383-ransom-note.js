/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    if (ransomNote.length > magazine.length) return false;

    let freq1 = {};
    let freq2 = {};

    for (let ch of ransomNote) freq1[ch] = (freq1[ch] || 0) + 1;
    for (let ch of magazine) freq2[ch] = (freq2[ch] || 0) + 1;

    for (let key in freq1)
        if ((freq2[key] || 0) < freq1[key]) return false;

    return true

};