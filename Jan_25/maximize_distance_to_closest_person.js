/**
 * @param {number[]} seats
 * @return {number}
 * https://leetcode.com/problems/maximize-distance-to-closest-person/
 */
var maxDistToClosest = function(seats) {
    let prev = -Infinity;
    let next = -Infinity;
    let ans = -1;
    for(let i = 0; i < seats.length; i++) {
        if(seats[i] == 1) {
            prev = i;
            next = i;
        } else {
            //console.log(i, next, prev);
            if(i > next) {
                next = i;
                while(next < seats.length && seats[next] == 0) {
                    next++;
                }
                if(next == seats.length) next = Infinity;
            }
            
            ans = Math.max(ans, Math.min(i - prev, next - i)); 
        }
    }
    return ans;
};