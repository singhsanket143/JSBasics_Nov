```
function f0(n) {
    let ans = 1;
    for(let i = 0; i < n; i++) {
        console.log(i);
        ans += i;
    }
    return ans;
}
```
```
function f1(n, m) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        ans += 1;
    }
    for(let j = 0; j < m; j++) {
        ans += 2;
    }
    console.log(ans);
}

```

```
function f2(n) {
    let ans = 9;
    for(let i=1;i<=Math.log(n);i++) {
        console.log(i);
    }
    return 0;
}
```
```
function f3(n) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            ans += 1
        }
    }
    return ans;
} 
```
```
function f4(n) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            ans += 1
        }
    }
    return ans;
} 
```
```
function f5(n) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0;j<Math.log(n);j++) {
            ans += 1
        }
    }
    return ans;
} 
```
```
function f6(n) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        ans += i;
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            ans += (i+j);
        }
    }
    console.log(ans);
}
```
```
function f7(n) {
    let ans = 0;
    for(let i = 1; i < n; i++) {
        for(let j = n; j > 1; j--) {
            ans += i;
        }
    }
    return ans;
}
```
```
function f8(n) {
    let ans = 0;
    for(let i = 1; i < n; i *= 2) {
        ans += i;
    }
    return ans;
}
```
```
function f9(n) {
    let ans = 0;
    while(n > 0) {
        ans += n;
        n /= 2;
    }
    return ans;
}
```
```
function f10(n) {
    for(let  i = n; i > 0; i/=2) {
        for(j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}
```
```
function f11(n) {
    for(let j = 1; j <= n; j++) {
        for(let i = 0; i < n; i = i + j) {
            console.log(i, j);
        }
    }
}
```
```
function f12(n) {
    let ans = 0;
    for(let i = 2; i <= n; i *= i) {
        ans++;
    }
}
```









function f(arr, element) { // [3,4,-1,2,5,6] element = 30
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == element) return i;
    }
    return -1;
}

// Best case -> Omega(1) -> constant
// Worst case -> O(n)