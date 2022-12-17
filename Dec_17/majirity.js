/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let currPossibleMajority = -1;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(count == 0) {
            currPossibleMajority = nums[i];
        }
        if(currPossibleMajority == nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return currPossibleMajority;
};