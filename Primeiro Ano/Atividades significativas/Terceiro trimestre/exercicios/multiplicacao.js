function mult (num1, num2){
    let numf = 0
    for (let c = 1; c <= num2; c++){
        numf += num1
    }
    return numf
}

console.log(mult(10, 4))