let arr = [{ a: 1 }, { b: 2 }, { c: 3 }]

function convertToIndividualObj(arr) {
    let obj = {}
    arr.map(function(value){
        let key = Object.keys(value)
        let val = Object.values(value)
        obj[key[0]] = val[0]
    })
    return obj
}

let obj = convertToIndividualObj(arr)
console.log(obj)