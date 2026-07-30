/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height = []) {
    let i = 0,
        j = height.length - 1;
    let maxWater = 0;

    while (i < j) {
        let w = j - i;
        let h = Math.min(height[i], height[j]);

        let currWater = w * h;

        maxWater = Math.max(maxWater, currWater);

        if (height[i] < height[j]) i++;
        else j--;
    }
    return maxWater;
};
