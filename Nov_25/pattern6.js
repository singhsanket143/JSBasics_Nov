function upperTriangle(n) {
// we will write a loop which will repeat some task for every row
    for(let row = 1; row <= n; row += 1) {
        // inside this loop of row, we will do the task for each row
        // Task - <some spaces><some stars>
        // n = 7, row = 3, "    ***" -> this string will be printed for this row
        // So lets build the spaces first
        let str = "";
        let spaces =  n - row; 
        // loop using which we will concatenate (n-row) spaces
        for(let j = 1; j <= spaces; j += 1) {
            str += " ";
        }
        // after the above loop ends, we will be having (n-row) spaces in str
        // ex: n = 7, row = 3, str = "    "
        // loop to concatenate stars
        let stars = 2*row - 1;
        for(let col = 1; col <= stars; col += 1) {
            str += "*";
        }
        // after the end of the above loop we have both spaces and then
        // stars in the string
        console.log(str); // print the string
    }
}

function lowerTriangle(n) {
    // the lower triangle consists of only n-1 rows
    for(let row = 1; row <= n-1; row += 1) {
        // for any given no row: we have spaces = row
        let str = "";
        let spaces = row;
        for(let j = 1; j <= spaces; j += 1) {
            str += " ";
        }
        // for every row, when u increase the row number we decrease no of stars
        // by observation we get 2*(n-row) - 1
        let stars = 2*(n - row) - 1;
        for(let k = 1; k <= stars; k+= 1) {
            str += "*";
        }
        console.log(str);
    }
}

function pattern(n) {
    upperTriangle(n);
    lowerTriangle(n);
}

pattern(3);
/*
n = 3
  *
 ***
*****
 ***
  *


*/