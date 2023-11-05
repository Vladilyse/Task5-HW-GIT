arr = [ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU",
    "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]
let str = []
for (el of arr) {
    if (el.includes("[IIII]")) {
        for (symb of el) {
            if (symb.includes("[IIII]")) {
                str.push(symb)
            }
        }
    }
    if (el.includes("[@@@@]")) {
        for (symb of el) {
            if (symb.includes("[@@@@]")) {
                str.push(symb)
            }
        }
    }
    if (el.includes("[llll]")) {
        for (symb of el) {
            if (symb.includes("[llll]")) {
                str.push(symb)
            }
        }
    }
    if (el.includes("[))))]")) {
        for (symb of el) {
            if (symb.includes("[))))]")) {
                str.push(symb)
            }
        }
    }
}
for(let n = 0; n<str.length; n++){
    if (n % 5 == 0){
        str.pop(str[n])
    }
}
let newStr = str.join(" ")
console.log(newStr)