/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */
var firstUniqChar = function(s) {
    let mp = {};
    for(let i = 0; i < s.length; i++) {
        let curr = s[i];
        if(!mp[curr]) {
            mp[curr] = 1;
        } else {
            mp[curr]++;
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(mp[s[i]] == 1) return i;
    }
    return -1;
};