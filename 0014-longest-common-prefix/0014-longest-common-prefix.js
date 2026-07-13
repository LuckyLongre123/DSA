/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length === 0 || strs[0] === "") return "";
    if (strs.length === 1) return strs[0];

    let result = strs[0];

    for (let i = 1; i < strs.length; i++) {
        if (strs[i] === "") return "";

        let curr = "";

        let j = 0;
        if (result[j] === "") return ""

        while (
            j < result.length &&
            j < strs[i].length &&
            result[j] === strs[i][j]
        )
            curr += strs[i][j++];

        if (curr === "") return "";
        result = curr;
    }
    return result;
};