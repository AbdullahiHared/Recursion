function fibonacci(n) {
    const storage = [0, 1];
    for (let i = 2; i <= n; i++) {
        storage.push(storage[i - 1] + storage[i - 2]);
    }
    return storage;
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]