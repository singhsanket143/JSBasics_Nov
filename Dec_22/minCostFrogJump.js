function f(i, n, heights) {
    if(i == n) return 0;
    if(i == n-1) {
        // we are at the second last index, we can only go to the last index
        return Math.abs(heights[i] - heights[i+1]) + f(i+1, n, heights);
    }
    if(i > n) return Infinity;

    return Math.min(
        Math.abs(heights[i] - heights[i+1]) + f(i+1, n, heights), 
        Math.abs(heights[i] - heights[i+2]) + f(i+2, n, heights)
    );
}

console.log(f(1, 6, [undefined, 30, 10, 60, 10, 60, 50])); // undefined is dummy for making array 1 based