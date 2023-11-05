function largestRadialSum(arr, d) {
    const n = arr.length;
    let maxSum = -Infinity;

    for (let i = 0; i < n; i++) {
        let currentSum = 0;

        for (let j = 0; j < d; j++) {
            currentSum += arr[(i + (j * (n / d))) % n];
        }

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
console.log(largestRadialSum([1, 2, 3, 4], 2));