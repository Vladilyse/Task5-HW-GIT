let a = 10
let sum = 0
if (a <= 0) {
    console.log("Нормальне значення введи")
} else {
    for (let i = 1; i<a; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    console.log(sum)
}
