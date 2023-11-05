function highAndLow(numbers) {
    const numberArray = numbers.split(' ').map(Number)
    const max = Math.max(...numberArray)
    const min = Math.min(...numberArray)
    return `${max}` + ` ` + `${min}`
}
console.log(highAndLow("7 8 2 5 6 1"))