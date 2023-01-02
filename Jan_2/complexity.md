```
function f0(n) {
    if(n == 1) return 1;
    return n*f0(n-1);
}
```
```
function f1(n) {
    if(n == 1 || n == 0) return n;
    return f(n-1) + f(n-2);
}
```
```
function f2(n) {
    if(n == 0) return;
    for(let i = 1; i <= n; i++) {
        // some op
    }
    f2(n-1);
}

```
```
function f3(arr, n) {
    // assume arr.length -> k
    if(n == 0)return;
    for(let i = 1; i <= arr.length; i++) {
        // some op
    }
    f3(arr, n-1);
}
```
```
function f4(n) {
    if(n <= 1) return 1;
    return f4(n-1) + f4(n-1);
}
```
```
function f(n) {
    if(n <= 1) return 1;
    return f(n-1) + f(n-2) + f(n-3)
}
```