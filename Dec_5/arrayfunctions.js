/*
    arrays are also custom objects in JS
    index of the element is the key and the element it self is the value
    ["abc", "def", "ghi"] -> {0: "abc", 1: "def", 2: "ghi"}
*/

/**
 * map function
 * map is a higher order function available with arrays
 * it takes a function as an argument -> f
 * it returns an array in which every value is actually populated by calling 
 * function f with original array element as argument
 * 
 * Every element of the original array is passed one by one in the argument function f
 * whatever is the output for each individual element, we populate that output in
 * an array
 * 
 * map internally iterates/loops over every element of the given original array
 * pass that element in the argument function f and then store the returned
 * value inside an array.
 */

function square(el) {
    return el*el; // returns square
}

function cube(x) {
    return x*x*x;
}

function isEvenOrOdd(x) {
    if(x % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const arr = [1,2,3,4,5]; // original array

const result = arr.map(square); // square is function passed as an argument
/**
 * square(1) -> 1
 * sqaure(2) -> 4
 * sqaure(3) -> 9
 * square(4) -> 16
 * square(5) -> 25
 */
console.log(result);

const cubeResult = arr.map(cube);
console.log(cubeResult);

const evenodd = arr.map(isEvenOrOdd);
console.log(evenodd);

/**
 * When to use maps ? 
 * In any situation when we have to do an operation on every element of the arrray
 * and store the result of each operation
 * map can be a good option
 * 
 * For example: 
 * Array of product objects. 
 * 
 */

const newArr = [9,8,7,6,5];

/**
 * if the function that we are passing in map takes two arguments
 * then first argument will be accessign the actual value
 * second argument will be accessing index of that value
 */
function print(element, idx) {
    return `Element at index ${idx} is ${element}`;
}

/**
 * here map is looping over every element 
 * and then passing element, index in the function print
 */
const result2 = newArr.map(print)
console.log(result2);


function customMapper(arr, func) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i));
    }
    return result;
}

const value = customMapper(newArr, print);
console.log(value);