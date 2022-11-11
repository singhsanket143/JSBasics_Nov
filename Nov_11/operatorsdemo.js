// Arithmetic Operators
let x = 10;
let y = 3;
console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division -> quotient
console.log(x % y); // division -> remainder
console.log(y**3); // exponent y^3 

// Assignment Operators
let a = 10; // here = just assignes value from rhs to lhs
a += 7; // here += is actually doing a = a + 2
console.log("Value of a after addition is", a);
a %= 3;
console.log("Value of a after storing remainder is", a);
a *= 5;
console.log("value after multiplication is", a);
a -= 3;
console.log("Value after subtraction is", a);
a /= 2;
console.log("Value after division is", a);
a **= 2;
console.log("Value after exponent is", a);