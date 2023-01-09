function merge(arr, lefti, leftj, righti, rightj) {
    let a = Array(leftj - lefti + 1);
    let b = Array(rightj - righti + 1);
    let k = 0;
    for(let i = lefti; i <= leftj; i++) {
        a[k] = arr[i];
        k++;
    }
    k = 0;
    for(let i = righti; i <= rightj; i++) {
        b[k] = arr[i];
        k++;
    }
    let c = [];
    let i = 0, j = 0;
    while(i < a.length && j < b.length) {
        if(a[i] < b[j]) {
            c.push(a[i]);
            i++;
        } else {
            c.push(b[j]);
            j++;
        }
    }
    while(j < b.length) {
        c.push(b[j]);
        j++;
    }
    while(i < a.length) {
        c.push(a[i]);
        i++;
    }

    // copy back c to arr
    k = 0;
    for(let i = lefti; i <= rightj; i++) {
        arr[i] = c[k];
        k++;
    }
}

function mergesort(arr, i, j) {
    if(i >= j) return;
    let mid = Math.floor((i + j) / 2);
    mergesort(arr, i, mid);
    mergesort(arr, mid+1, j);
    merge(arr, i, mid, mid+1, j);
}

let arr = [9,1,6,-1,3,18,2,14,-2];
mergesort(arr, 0, arr.length - 1);
console.log(arr);