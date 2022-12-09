/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let finalAns = 0;
    let consecutiveOnes = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1) {
            consecutiveOnes++;
        } else {
            finalAns = Math.max(finalAns, consecutiveOnes);
            consecutiveOnes = 0; // restarting the count
        }
    }
    return Math.max(finalAns, consecutiveOnes);
};