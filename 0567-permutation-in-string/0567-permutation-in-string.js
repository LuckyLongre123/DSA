
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const freq = new Array(26).fill(0);
    const currentWindowFreq = new Array(26).fill(0);

    let low = 0;
    let high = s1.length;
    let n = s2.length;


    for (let char of s1) freq[char.charCodeAt(0) - 97]++;

    for (let i = low; i < high; i++)
        currentWindowFreq[s2.charCodeAt(i) - 97]++;

    if (isEquall(freq, currentWindowFreq)) return true;


    while (high < n) {
        currentWindowFreq[s2.charCodeAt(low++) - 97]--;
        currentWindowFreq[s2.charCodeAt(high++) - 97]++;

        if (isEquall(freq, currentWindowFreq)) return true;
    }

    return false;

};

function isEquall(freq, currentWindowFreq) {
    for (let i = 0; i < freq.length; i++)
        if (freq[i] !== currentWindowFreq[i]) return false;

    return true;
}