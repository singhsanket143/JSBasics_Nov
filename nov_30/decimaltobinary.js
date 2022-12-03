function decimalToBinary(num) {
    let ans = "";
    while(num > 0) {
        if(num % 2 == 0) {
            // even
            ans = "0" + ans;
        } else {
            // odd
            ans = "1" + ans;
        }
        num = Math.floor(num / 2);
    }
    return ans;
}

console.log(decimalToBinary(6));

/**
 * ""
 * 34 -> "0"
 * 17 -> "10"
 * 8 -> "010"
 */