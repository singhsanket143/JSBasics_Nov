/**
 * https://leetcode.com/problems/two-sum/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function fn(x, y) {
    return x[0] - y[0];
}
var twoSum = function(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = [arr[i], i];
    }
    // console.log(arr);
    arr.sort(fn);
    let start = 0, end = arr.length - 1; 
    while(start < end) {
        if(arr[start][0] + arr[end][0] == target) {
            return [arr[start][1], arr[end][1]];
        } else if (arr[start][0] + arr[end][0] > target) {
            end--;
        } else {
            start++;
        }
    }
};