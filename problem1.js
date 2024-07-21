// seating arrangement problem

function determineSeatingArrangement(n) {
    let rem = n % 6
    let seatNo
    if (rem == 0) {
        seatNo = (n * 1) + 1
    }
    else if (rem == 1) {
        seatNo = (n * 1) + 11
    }
    else if (rem == 2) {
        seatNo = (n * 1) + 9
    }
    else if (rem == 3) {
        seatNo = (n * 1) + 7
    }
    else if (rem == 4) {
        seatNo = (n * 1) + 5
    }
    else if (rem == 5) {
        seatNo = (n * 1) + 3
    }
    if ((seatNo % 6) == 0 || (seatNo % 6) == 1) {
        return `${seatNo} WS`
    }
    else if ((seatNo % 6) == 2 || (seatNo % 6) == 5) {
        return `${seatNo} MS`
    }
    else {
        return `${seatNo} AS`
    }
}

let input = [3,6,40]
for(let i=0;i<input.length;i++){
    let output = determineSeatingArrangement(input[i])
    console.log(output)
}