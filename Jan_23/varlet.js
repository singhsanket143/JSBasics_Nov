function f() {
    for(var i = 0; i < 4; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
    console.log("ended loop", i);
}
f();