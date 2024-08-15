function fibRec(n) {
    let store = [0, 1];
    function helper(n) {
        if (store[n] !== undefined) return store[n];
        store[n] = helper(n - 1) + helper(n - 2);
        return store[n];
    }

    helper(n);
    return store;
}

console.log(fibRec(-1)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]