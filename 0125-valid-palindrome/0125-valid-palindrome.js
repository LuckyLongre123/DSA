/**
 * @param {string} s
 * @return {boolean}
 */
function toLower(char) {
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) return code + 32;
    else return code;
}

function isAlphaNumeric(code) {
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}

var isPalindrome = function (s = "") {
    let i = 0,
        j = s.length - 1;

    while (i < j) {
        let codeI = toLower(s.charAt(i));

        if (!isAlphaNumeric(codeI)) {
            i++;
            continue;
        }

        let codeJ = toLower(s.charAt(j));
        if (!isAlphaNumeric(codeJ)) {
            j--;
            continue;
        }

        if (codeI !== codeJ) return false;

        i++;
        j--;
    }

    return true;
};