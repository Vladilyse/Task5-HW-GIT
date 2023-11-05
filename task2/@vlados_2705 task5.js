const object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
}
function getRootProperty(object, nesses) {
    for (let main in object) {
        if (Array.isArray(object[main]) && object[main].includes(nesses)) {
            return main
        } else if (typeof object[main] === 'object') {
            let result = getRootProperty(object[main], nesses);
            if (result !== null) {
                return main
            }
        }
    }
    return null
}
const resEnd = getRootProperty(object, 9);
console.log(resEnd);