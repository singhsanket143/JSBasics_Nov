function f(x, y) {
    let temp = x;
    x = y;
    y = temp;
}

let a = 10, b = 20;
f(a, b);
console.log(a, b)