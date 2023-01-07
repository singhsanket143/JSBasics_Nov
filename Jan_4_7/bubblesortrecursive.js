function f(arr, k, i) {
    if(k == 0) return;
    if(i == k) {
        f(arr, k-1, 0);
        return;
    }
    if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }

    f(arr, k, i+1);
}


let arr = [5,4,3,2,1];
f(arr, arr.length - 1, 0);
console.log(arr);
k = 2;
let n = arr.length;
console.log(arr[n - k]);