function f() {
    console.log(a);
    var a = 10; // var gives function scope, 
    if(true) {
        var z = 10;
        //console.log(y); // error
        let y = 9; // let gives block scope
        console.log(y);
    }
    console.log(a);
    console.log(z);
    console.log(y);
}

f();