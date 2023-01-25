// function f() { // function declaration
//     console.log("I am a function declaration");
// }

// // everything below is a function expression
// const x = function fn() {
//     console.log("i am a named function expression");
// }

// const z = function () {
//     console.log("i am an anonymous function expression");
// }

// (function f() {
//     console.log("i am an IIFE")
// })();
// IIFE -> Immediately invoked function expression

const y = (x, y) => {
    console.log("i am fat arrow function", x, y);
}

const a = (x) => x*x;

// f();
// x();
// z();
// fn(); throws error
y(10, 20)
console.log(a(10));
[1,2,3,4,5].sort(function (x, y) {
    return x - y;
});
arr = [5,4,3,2,1];
arr.sort((a, b) => a-b);
console.log(arr);