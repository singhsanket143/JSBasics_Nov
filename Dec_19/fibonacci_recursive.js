function f(n) {
    if(n == 0 || n == 1) return n;
    return f(n-1) + f(n-2);
}

console.log(f(4));