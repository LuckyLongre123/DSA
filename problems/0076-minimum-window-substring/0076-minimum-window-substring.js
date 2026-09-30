/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let n = s.length;
    let start = 0;
    let res = n + 1;

    let need = new Array(256).fill(0);
    let have = new Array(256).fill(0);

    let required = 0;
    for (let i = 0; i < t.length; i++) {
        let charCode = t.charCodeAt(i);
        if (need[charCode] === 0) {
            required++;
        }
        need[charCode]++;
    }

    let low = 0;
    let matches = 0;

    for (let high = 0; high < n; high++) {
        let rightChar = s.charCodeAt(high);
        have[rightChar]++;

        if (need[rightChar] > 0 && have[rightChar] === need[rightChar]) matches++;

        while (matches === required) {
            let len = high - low + 1;

            if (res > len) {
                res = len;
                start = low;
            }

            let leftChar = s.charCodeAt(low);
            have[leftChar]--;

            if (need[leftChar] > 0 && have[leftChar] < need[leftChar]) matches--;
            low++;
        }
    }

    return res === n + 1 ? "" : s.slice(start, start + res);
};
