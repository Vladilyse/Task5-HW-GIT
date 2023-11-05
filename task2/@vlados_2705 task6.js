let arr = ["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]
function landPerimeter(arr) {
    if (!arr || arr.length === 0) {
        return "Значення периметру не є дійсним"
    }
    let rows = arr.length
    let cols = arr[0].length
    let perimeter = 0
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (arr[row][col] === 'X') {
                for (let [directionOne, directionTwo] of directions) {
                    let newRow = row + directionOne
                    let newCol = col + directionTwo
                    if (
                        newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols ||
                        arr[newRow][newCol] === 'O'
                    ) {
                        perimeter++
                    }
                }
            }
        }
    }
    return `Total land perimeter: ${perimeter}`;
}
const resEnd = landPerimeter(arr);
console.log(resEnd);