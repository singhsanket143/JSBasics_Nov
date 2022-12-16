/**
 * https://leetcode.com/problems/reshape-the-matrix/description/
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    // cannot do reshape
    if(n*m != r*c) return mat;

    let row = 0;
    let col = 0;
    let result = Array(r);
    for(let i = 0; i < r; i++) {
        result[i] = Array(c).fill(0);
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let element = mat[i][j];
            result[row][col] = element;
            col++;
            if(col == c) {
                row++;
                col = 0;
            }
        }
    }
    return result;
};

mat = [[1,2],[3,4]], r = 1, c = 4

matrixReshape(mat, r, c);