/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
 */
var areOccurrencesEqual = function(s) {
    let mp = {};
    for(let i = 0; i < s.length; i++) {
        let curr = s[i];
        if(!mp[curr]) {
            mp[curr] = 1;
        } else {
            mp[curr]++;
        }
    }
    
    let values = Object.values(mp);
    let temp = values[0];
    for(let i = 1; i < values.length; i++) {
        if(temp != values[i]) return false;
    }
    return true;
};