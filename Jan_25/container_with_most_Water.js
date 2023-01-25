/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.com/problems/container-with-most-water/
 */
var maxArea = function(height) {
    let s = 0, e = height.length - 1;
    let ans = 0;
    while(s < e) {
        let width = e - s;
        ans = Math.max(ans, width*Math.min(height[s], height[e]));
        if(height[s] <= height[e]) {
            s++;
        } else {
            e--;
        }
    }
    return ans;
};