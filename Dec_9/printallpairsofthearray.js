function printPair(arr) {
    for(let i = 0; i <= arr.length - 2; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

printPair([2,9,13,6,8,7,5]);