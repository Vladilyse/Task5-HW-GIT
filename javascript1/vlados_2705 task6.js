const number = 42145
function sortFunct(number) {
    const numberString = number.toString()
    const sortResult = numberString.split('').sort((a, b) => b - a).join('')
    return sortResult
}
const result = sortFunct(number)
console.log(result)