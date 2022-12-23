/**
 * @param {number} n
 * @return {number[]}
 */
let arr;
function f(i, n) {
    if(i > n) return;
    if(i != 0) {
        arr.push(i);
    }
    for(let j = ((i == 0) ? 1 : 0); j <= 9; j++) {
        f(10*i + j, n);
    }
}

var lexicalOrder = function(n) {
    arr = [];
    f(0, n);
    return arr;
};