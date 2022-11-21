function isEvenOrOdd(num) {
    if(num % 2 == 0) {
        return "Even";
    } 
    else {
        return "Odd";
    }
}

// check which numbers are odd and which are even between 1 - 50
// console.log("1 is ", isEvenOrOdd(1));
// console.log("2 is ", isEvenOrOdd(2));
// console.log("3 is ", isEvenOrOdd(3));
// .
// . 
// . 
// console.log("50 is", isEvenOrOdd(50));

for(let i = 1; i <= 50; i++) {
    console.log(i, "is", isEvenOrOdd(i));
}