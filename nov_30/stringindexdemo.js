let str = "microsoft"; // len -> 9
/**
 * m - 0
 * i - 1
 * c - 2
 * r - 3
 * o - 4
 * s - 5
 * o - 6
 * f - 7
 * t - 8 (len - 1)
 * 
 */
console.log(str[2]); // prints c
console.log(str[9]); // print undefined

// starting index -> 0
// last index -> length - 1

// Can we determine length of the string  -> str.length
console.log(str.length); 

for(let idx = 0; idx <= str.length - 1; idx++) {
    console.log(idx, str[idx]); // we can iterate on all chars of a string by actually iterating on indexes
}