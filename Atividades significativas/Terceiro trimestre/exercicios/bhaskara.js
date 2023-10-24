function bhaskara(a, b, c){
    let vetor = []
    let delta = b**2 - 4 * a * c
    if (delta < 0){
        return "Delta menor que 0. Não é possível continuar a operação"
    }
    vetor.push((-b + (delta ** (1/2))) / (2 * a))
    vetor.push((-b - (delta ** (1/2))) / (2 * a))
    return vetor
}

console.log(bhaskara(1, 0, -16))