/**
 * @param {number[][]} matrix
 * @return {number[]}
 * https://leetcode.com/problems/spiral-matrix/description/
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;//no of rows
    let n = matrix[0].length;//no of cols
    let start_row = 0;
    let start_col = 0;
    let last_row = matrix.length - 1; // we do -1 for 0 based indexing
    let last_col = matrix[0].length - 1; // we do -1 for 0 based indexing
    let count = 0; // how many elements from the matrix are inserted/eliminated
    let result = []; // to return the result

    while(count < n*m) {
        // elimiate start_row
        for(let x = start_col; x <= last_col; x++) {
            result.push(matrix[start_row][x]);
            count++; // because we added a new element
        }
        start_row += 1; // because we are done with the row
        if(count == n*m) break;

        // eliminate last_col
        for(let x = start_row; x <= last_row; x++) {
            result.push(matrix[x][last_col]);
            count++;
        }
        last_col -= 1; // because we are done with the col
        if(count == n*m) break;

        // eliminate last_row
        for(let x = last_col; x >= start_col; x--) {
            result.push(matrix[last_row][x]);
            count++;
        }
        last_row -= 1;
        if(count == n*m) break;

        // eliminate start_col
        for(let x = last_row; x >= start_row; x--) {
            result.push(matrix[x][start_col]);
            count++;
        }
        start_col++;
        if(count == n*m) break;
    }


    // after completing the algorithm
    return result;
};

/**
eliminate start_row done
eliminate last_col done
eliminate last_row done
eliminate start_col done
*/