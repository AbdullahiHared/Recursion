function sort(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeArrays(arr) {
    if (arr.length === 0) return [];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result = sort(result, arr[i]);
    }

    return result;
}

const arr = [[1, 3, 5], [2, 4, 6], [7, 8, 9]];
console.log(mergeArrays(arr)); //

function mergeSort(arr) {
    if (arr.length === 0) return []
    if (arr.length === 1) return arr;
}