/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * https://leetcode.com/problems/merge-intervals/
 */
// var merge = function(intervals) {
//     // sorting based on start time
//     intervals.sort(function comparator(a, b) {
//         return a[0] - b[0]; // sorts based on start value
//     });
//     let result = [];
//     result.push(intervals[0]);
//     for(let i = 1; i < intervals.length; i++) {
//         let endOfLast = result[result.length - 1][1];
//         let startOfCurr = intervals[i][0];
//         if(endOfLast >= startOfCurr) {
//             result[result.length - 1][1] = Math.max(endOfLast, intervals[i][1]);
//         } else {
//             result.push(intervals[i]);
//         }
//     }
//     return result;
// };

var merge = function(intervals) {
    // sorting based on start time
    intervals.sort(function comparator(a, b) {
        return a[1] - b[1]; // sorts based on end value
    });
    let result = [];
    result.push(intervals[intervals.length - 1]);
    for(let i = intervals.length - 2; i >= 0; i--) {
        let startOfLast = result[result.length - 1][0];
        let endOfCurr = intervals[i][1];
        if(startOfLast <= endOfCurr) {
            result[result.length - 1][0] = Math.min(result[result.length - 1][0], intervals[i][0]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};