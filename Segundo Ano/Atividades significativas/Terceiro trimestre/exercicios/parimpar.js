function parImpar(num){
    if (num % 2 == 0) {
        return "Par"
    }
    else{
        return "Impar"
    }
}

var numero = 3
var numero2 = 8
console.log(`O numero ${numero} é ` + parImpar(numero))
console.log(`O numero ${numero2} é ` + parImpar(numero2))