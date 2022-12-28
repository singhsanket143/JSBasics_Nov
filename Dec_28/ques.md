function f0(n) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            ans += 1
        }
    }
    return ans;
} 
Time: Worst - O(n^2)

function f1(n) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < Math.log(n); j++) {
            ans += 1
        }
    }
    return ans;
} 

/*
i = 0, j = logn
i = 1, j = logn
i = 2, j = logn
.
.
.
.
i = n-1, j = logn
*/
// O(nlogn)

function f2(n, m) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        ans += 1;
    }
    for(let j = 0; j < m; j++) {
        ans += 2;
    }
    console.log(ans);
}

// O(n + m)

function f3(n) {
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

// O(n + n^2) => O(n^2)

function f4(n) {
    let ans = 0;
    for(let i = 1; i < n; i++) {
        for(let j = n; j > 1; j--) {
            ans += i;
        }
    }
    return ans;
}

// O(n^2)
function f5(n) {
    for(let  i = n; i > 0; i/=2) {
        for(j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}

//O(n)

function f6(n) {
    let ans = 0;
    while(n > 0) {
        ans += n;
        n /= 2;
    }
    return ans;
}
// O(logn)

function f7(n) {
    for(let j = 1; j <= n; j++) {
        for(let i = 0; i < n; i = i + j) {
            console.log(i, j);
        }
    }
}

// O(nlogn)

function f8(n) {
    let ans = 0;
    for(let i = 1; i <= n; i*=2) {
        ans += 1;
    }
    return ans;
}

// O(logn)


function gun() {
    console.log("In the gun");
}

function fun(n) {
    let i = 0;
    i += n;
    gun();
    console.log("HAHAHAH");
}

// O(1)

function fact(n) {
    if(n == 0) return 1;
    let assume = fact(n-1);
    return n*assume;
}

// O(n)

function fib(n) {
    if(n == 0 || n == 1) return n;
    return fib(n-1) + fib(n-2);
}

// O(2^n)

function f9(n) {
    if(n == 0) return;// O(1)
    let str = "";// O(1)
    for(let i = 1; i <= n; i++) { // O(nk)
        str += "* "; // O(k)
    }
    console.log(str); //O(1)
    f9(n-1); // O(1)
}

f9(5);
// O(n^3)