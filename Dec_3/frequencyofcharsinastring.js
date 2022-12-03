let str = "nitin";
let freqMap = {}; // empty
for(const char of str) {
    if(freqMap[char]) {
        // if present update it
        freqMap[char] += 1;
    } else {
        // if not present add it
        freqMap[char] = 1;
    }
}

console.log(freqMap);