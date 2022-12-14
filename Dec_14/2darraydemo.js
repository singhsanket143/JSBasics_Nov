let grid = [ [1,2,3,4] , [5,6,7,8] ,  [9,8,7,6] ,  [5,4,3,2]];

console.log(grid);

// To create a 2d array of 5x6 (5 rows and 6 columns) and every cell of the 2d array should 0

let arr = Array(5); // outer
for(let i = 0 ; i < 5; i++) {
    let inner = Array(6).fill(0);
    arr[i] = inner;
}

console.log(arr);

arr[0][0] = 11;
arr[0][1] = 12;
console.log(arr);
console.log(arr[0][1]);