function primo(num){
    let divisores = 0
    for (let c = 1; c <= num; c++){
        if (num % c == 0){
            divisores++
        }
    }
    if (divisores <= 2){
        return "Primo"
    }
    return "Não primo"
}

var numero = 7
var numero2 = 10

console.log(`O numero ${numero} é ` + primo(numero))
console.log(`O numero ${numero2} é ` + primo(numero2))