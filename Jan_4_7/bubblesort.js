function bubblesort(arr) {
    let n = arr.length;
    // this function applied adjacent comparisons and immediate swaps with adjacent element
    for(let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        // we just need n-1 iterations because after than we will be only left with smallest element
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) break;
    }
}

let arr = [10,11,12];
bubblesort(arr);
console.log(arr);