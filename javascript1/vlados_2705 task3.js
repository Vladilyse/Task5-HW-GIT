let count = 1
function findNd(count){
    let general = 0
    const squar = 1071225
    while(general<squar){
        general += (count)**3
        if(general==squar){
            return count
        }
        count++
    }
    return -1
}
let result = findNd(count)
console.log(result)