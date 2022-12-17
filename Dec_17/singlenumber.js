/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/single-number/description/
 */
var singleNumber = function(nums) {
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};

/**
Approach 1: Using freq map
[4,1,2,1,3,2,3]
 - {
     1: 2,
     2: 2,
     3: 2,
     4: 1
 }

Approach 2: 
Bitwise xor:
 XOR
 a  b   result
 0  0       0
 0  1       1
 1  0       1
 1  1       0
Then in xor operation if we xor two same values, the output is zero, whereas
xor of a value with 0, gives the same value
[4,1,2,1,3,2,3]
4 ^ 1 ^ 2 ^ 1 ^ 3 ^ 2 ^ 3
4 ^ 0 -> 4
 */
// 