function contarVogais(palavra){
    palavra = palavra.toLowerCase()
    let cont = 0
    for(const letra of palavra){
        if (letra == 'a' || letra == 'e' ||letra == 'i' ||letra == 'o' ||letra == 'u'){
            cont++
        }
      }
    return cont
}

console.log(contarVogais("Areia"))