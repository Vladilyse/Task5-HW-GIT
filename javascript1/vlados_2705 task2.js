const disks = 3;
const moves = resFunct(disks)
function resFunct(disks) {
    return Math.pow(2, disks) - 1
}
console.log(`Мінімальна кількість кроків для перемоги в грі з ${disks} дисками: ${moves}`)