/**
 * https://leetcode.com/problems/two-sum/description/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let start = 0, end = arr.length - 1; 
    while(start < end) {
        if(arr[start] + arr[end] == target) {
            return [start + 1, end + 1];
        } else if (arr[start] + arr[end] > target) {
            end--;
        } else {
            start++;
        }
    }
};