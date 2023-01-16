/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/reverse-pairs/
 */
let count = 0;
function merge(left, right) {
    // left -> [], right -> []
    let result = [];
    let i = 0, j = 0;
    w
    while(i < left.length && j < right.length) {
        if(left[i] > 2*right[j]) {
            count += (left.length - i);
            j++;
        } else {
            i++;
        }
    }
    i = 0;
    j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while(i < left.length) {
        result.push(left[i]);
        i++;
    }
    while(j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

function f(arr, i, j) {
    if(i == j) {
        let temp = [arr[i]];
        return temp;
    }
    let mid = Math.floor((i + j) / 2);
    let left = f(arr, i, mid);
    let right = f(arr, mid+1, j);
    let result = merge(left, right);
    return result;
}

function mergesort(arr) {
    return f(arr, 0, arr.length - 1);
}

var reversePairs = function(nums) {
    count = 0;
    nums = mergesort(nums);
    return count;
};