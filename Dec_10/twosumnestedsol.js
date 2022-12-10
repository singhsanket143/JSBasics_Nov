/**
 * https://leetcode.com/problems/two-sum/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    for(let i = 0; i <= arr.length - 2; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
};