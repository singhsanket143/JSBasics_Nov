console.log("abc" == "abc");
let x = "abc"; // string 
let y = "abc";
console.log(x == y);

let z = String("abc"); // string
let a = new String("abc"); // string object
console.log(z);

// console.log(a == z);
// console.log(a == x);
// console.log(z == x);
// console.log("abc" == new String("abc"));

console.log(typeof a);
console.log(typeof z);
console.log(typeof x);
console.log(a === z);
console.log(a === x);
console.log(z === x);
console.log("abc" === new String("abc"));