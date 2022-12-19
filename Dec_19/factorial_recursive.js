function f(n) {
    // base case
    if(n == 1) {
        return 1;
    }
    return n * f(n-1);
}

console.log(f(7));

// loops

function factorialWithLoops(n) {
    let ans = 1;
    for(let i = 1; i <= n; i++) {
        ans = ans * i;
    }
    return ans;
}