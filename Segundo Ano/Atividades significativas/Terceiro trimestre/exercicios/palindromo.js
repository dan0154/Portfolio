function palindromo(palavra){
    palavra = palavra.toLowerCase()
    var invertida = ""
    for (var c = palavra.length - 1; c >= 0; c--){
        invertida += palavra[c]
    }
    if (invertida == palavra){
        return "Palíndromo"
    }
    return "Não Palíndromo"
}

console.log(palindromo("Ovo"))
console.log(palindromo("Uva"))