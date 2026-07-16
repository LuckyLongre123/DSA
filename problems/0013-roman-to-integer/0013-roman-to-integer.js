/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let first = map[s.charAt(i)] 
        let second = map[s.charAt(i + 1)] 

        if (first < second) {
            result += second - first;
            i++;
        } else result += first;
    }
    return result;
};
