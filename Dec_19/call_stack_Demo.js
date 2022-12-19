function fun() {
    let x = 10;
    console.log("Inside fun");
}

function gun(y) {
    console.log("inside gun");
    fun();
    return 9;
    console.log("completed fun");
}

function run() {
    var z = 9;
    let m = gun();
    console.log("exit");
}

run();