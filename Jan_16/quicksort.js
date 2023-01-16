function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr, pivotIndex, L, R) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let pivotElement = arr[pivotIndex];
    let i = L - 1;
    // swap the pivot on the last index
    swap(arr, pivotIndex, R);
    let j = L;
    while(j <= R - 1) {
        if(arr[j] <= pivotElement) {
            i++;
            swap(arr, i, j);
        }
        j++;
    }
    swap(arr, i+1, R);
    return i+1;
}
function pickRandomPivot(l, r) { /// [5, 9], 0.3*(4) + 5 -> 1.2 + 5 -> 6.2 -> 
    return Math.floor(Math.random()*(r - l) + l);
}
function f(arr, l, r) {
    if(l >= r) return;
    let pivotIndex = pickRandomPivot(l, r);
    let m = partition(arr, pivotIndex, l, r);
    f(arr, l, m-1);
    f(arr, m+1, r);
}

function quicksort(arr) {
    return f(arr, 0, arr.length - 1);
}

let arr = [5,4,3,2,1, 8,9 , 0, -2, 3, 5];
quicksort(arr);
console.log(arr);