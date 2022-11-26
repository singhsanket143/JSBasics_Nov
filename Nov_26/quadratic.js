function solve(a, b, c) {
    // ax^2 + bx + c
    let sqrtValue = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sqrtValue) / (2*a);
    let root2 = (-b - sqrtValue) / (2*a);
    console.log(root1, root2);
}

solve(2, 5, 3);