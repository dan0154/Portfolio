function paresArr(arr){
    let pares = []
    for(const num of arr){
        if (num % 2 == 0){
            pares.push(num)
        }
    }
    return pares
}
console.log(paresArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))