/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n <= 0) return [""];

    const result = [];
    solve(n, result);

    return result;
};

function solve(n, result, cur = "", open = 0, close = 0) {

    if (cur.length === 2 * n) {
        result.push(cur);
        return;
    }

    if (open < n)
        solve(n, result, cur + '(', open + 1, close);


    if (close < open)
        solve(n, result, cur + ')', open, close + 1);

}

