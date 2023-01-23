console.log(z);
console.log(m);
var z = 10; // global scope, we can access var anywhere

let m = 9; // we cannot access let variables before declaration

function f() {
    console.log(z);
    console.log(m);
    if(true) {
        console.log(z, m);
    }
}

f();