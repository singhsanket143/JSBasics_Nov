function checkPalindrome(num) {
    // convert the num to string
    let str = "" + num;
    let i = 0;
    let j = str.length - 1;
    while(i <= j) {
        if(str[i] == str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    // if we completed the loop and never found a mismatch that means it is a palindrome
    return true;
}

console.log(checkPalindrome(1991));