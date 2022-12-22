function f(i, j, n, m) {
    if(i == n-1 && j == m-1) return 1;
    if(i >= n || j >= m) return 0;

    return f(i, j+1, n, m) + f(i+1, j, n, m);
}

console.log(f(0, 0, 2,2));