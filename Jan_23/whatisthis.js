function f(obj) {
    obj.c = 99;
}

let o = {a: 9, b: 8};
console.log(o);
f(o);
console.log(o);