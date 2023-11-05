arr = [1,2,3,4,3,2,1]
function findEvenIndex(arr) {
    let sumRight = 0
    let sumLeft = 0

    for (let n = 0; n < arr.length; n++) {
        sumRight += arr[n]
    }

    for (n = 0; n < arr.length; n++) {
        sumRight -= arr[n]
        if (sumRight == sumLeft) {
            return n
        }
        sumLeft += arr[n]
    }
    return -1;
}

const N = findEvenIndex(arr)
console.log(N)