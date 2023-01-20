/**
 * @param {number[]} changed
 * @return {number[]}
 * https://leetcode.com/problems/find-original-array-from-doubled-array/
 */
var findOriginalArray = function(changed) {
    if(changed.length%2 != 0) return [];
    changed.sort(function(a, b) {
        return a-b;
    });
    let freq = {};
    for(let i = 0; i < changed.length; i++) {
        if(!freq[changed[i]]) {
            freq[changed[i]] = 1;
        } else {
            freq[changed[i]]++;
        }
    }
    
    let result = [];
    for(let i = 0; i < changed.length; i++) {
        let curr = changed[i];
        if(freq[curr]) {
            let doubleVal = 2*curr;
            if(freq[doubleVal]) {
                freq[curr]--;
                freq[doubleVal]--;
                result.push(curr);
                if(freq[curr] == 0) {
                    delete freq[curr];
                }
                if(freq[doubleVal] == 0) {
                    delete freq[doubleVal];
                }
            } else {
                return [];
            }
        }
    }
    
    return result;
};