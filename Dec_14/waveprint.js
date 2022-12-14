function print(grid, m, n) {
    let str = "";
    for(let col = 0; col < n; col++) {
        if(col % 2 == 0) {
            // even col -> up to down
            for(let row = 0; row < m; row++) { // this loop goes from up to down
                str += grid[row][col] + " ";
            }
        } else {
            // odd col down to up
            for(let row = m-1; row >= 0; row--) { // this loop goes down to up
                str += grid[row][col] + " ";
            }
        }
        
    }
    console.log(str);
}


let grid = [ [0, 1, 2, 3], [4,5,6,7], [8,9,10,11], [12,13,14,15]];;

print(grid, 4, 4);