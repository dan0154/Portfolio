function sumPares(inicio, fim){
    let soma = 0
    for(let c = inicio; c <= fim; c++){
        if(c % 2 == 0){
            soma += c
        }
    }
    return soma;
}

console.log(sumPares(1, 10))