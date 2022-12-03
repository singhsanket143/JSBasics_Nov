function gcd(a, b) {
    let ans = 1;
    for(let i = 2; i <= Math.min(a, b); i++) {
        if(a%i == 0 && b%i == 0) {
            ans = i;
        }
    }
    return ans;
}

function lcm(a, b) {
    let G = gcd(a, b);
    return (a*b) / G;
}

console.log(lcm(9, 12));