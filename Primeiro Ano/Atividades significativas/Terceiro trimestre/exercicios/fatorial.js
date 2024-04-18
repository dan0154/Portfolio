function fatorial (num){
    aux = 1
    for (var c = 1; c <= num; c++){
         aux *= c
    }
    return aux
}
var numero = 5
var numero2 = 0

console.log(`O fatorial de ${numero} é ` + fatorial(numero))
console.log(`O fatorial de ${numero2} é ` + fatorial(numero2))