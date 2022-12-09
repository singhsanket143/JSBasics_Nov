/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let x = Math.abs(nums[i]);
        let idx = x - 1;
        if(nums[idx] > 0) {
            nums[idx] *= -1;
        }
    }
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            result.push(i+1);
        }
    }
    return result;
};