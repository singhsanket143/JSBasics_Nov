function pattern(n) {
    // logic for printing the pattern
    // write a loop to repeat a task for n rows
    for(let row = 1; row <= n; row += 1) {
        // task
        // the task is to concatenate "*" n - row + 1 times
        let str = "";
        for(let col = 1; col <= n - row + 1; col += 1) { // only change is the limit of loop
            str += "*";
        }
        console.log(str);
    }
}

pattern(9);