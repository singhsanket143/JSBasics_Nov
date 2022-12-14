// no of rows = grid.length
function display(grid) {
    // print the whole grid row by row
    let str = "";
    for(let i = 0; i < grid.length; i++) { // row
        for(let j = 0; j < grid[i].length; j++) {
            str += grid[i][j] + " "; // grid[i][j] -> element at ith row and jth col
        }
    }
    console.log(str);
}

