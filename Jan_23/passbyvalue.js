function f(x) {
    x = 99;
}

let a = 10;
console.log(a);
f(a); // we are not transferring original a, instead we transfer copy variable of a
console.log(a);

function g(s) {
    s = "sanket";
}

let s = "abc";
console.log(s);
g(s);
console.log(s);