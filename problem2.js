let input = {
    a: 1,
    b: 2,
    c: 3
}
function convertToArrayObjects(input){
    let arr = []
    for (const key in input) {
        let str = `{"${key}":${input[key]}}` 
        let individualObj = JSON.parse(str)
        arr.push(individualObj)
    }
    return arr
}
let result = convertToArrayObjects(input)
console.log(result)



