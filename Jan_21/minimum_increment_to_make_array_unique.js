var minIncrementForUnique = function(nums) {
    nums.sort(function(a, b) {
        return a-b;
    });
    let prev = nums[0];
    let count = 0;
    for(let j = 1; j < nums.length; j++) {
        let tj = Math.max(nums[j], prev+1);
        count+= (tj - nums[j]);
        prev = tj;
    }
    return count;
};