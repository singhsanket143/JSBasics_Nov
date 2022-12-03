function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function separate(arr) {
    let i = 0;
    let j = arr.length - 1;
    while(i <= j) {
        // till the time i and j have not passed each other
        if(arr[i] == 1) { // we just check if we have 1 at index i, doesnt matter what we have at j
            swap(arr, i, j);
            j--; // include the new 1 we threw in the right window
        } else {
            i++; // expand the left window directly
        }
    }
}

let arr = [1,1,1,0,1,0,0,0,1,0,1];
separate(arr); // transform our original array
console.log(arr);
//output->[0, 0, 0, 0, 0,1, 1, 1, 1, 1,1]