/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0,
        j = 0;

    while (i < s.length && j < t.length) {
        let sChar = s.charAt(i);
        let tChar = t.charAt(j);

        if (sChar === tChar) {
            i++;
            j++;
        } else j++;
    }
    console.log(i,j)
    return i >= s.length;
};
