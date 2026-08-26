/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let low = 0;
    let n = fruits.length;
    let res = -1;

    let map = new Map();

    for (let high = 0; high < n; high++) {
        let highFruitType = fruits[high];
        map.set(highFruitType, (map.get(highFruitType) || 0) + 1); // include high in information

        while (map.size > 2) {
            // jb tk info glt h, means
            let lowFruitType = fruits[low];
            map.set(lowFruitType, map.get(lowFruitType) - 1);
            if (map.get(lowFruitType) === 0) {
                map.delete(lowFruitType);
            }

            low++;
        }
        let len = high - low + 1;
        res = Math.max(res, len);
    }
    return res;
};
