function g() {
    function f() {
        r = 3.14; // auto global -> only happens when assigning
        console.log(y); // -> when using a variable, auto global doesn't exist
    }
    f();
}

g();
console.log(r);