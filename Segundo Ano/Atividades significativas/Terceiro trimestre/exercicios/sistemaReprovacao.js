function situacaoFinal(num){
    let notaFinal
    if (num < 38){
        console.log(`Nota final: ${num}\nSituação: Reprovado`)
    } else if (num % 5 >= 3){
        notaFinal = num + (5 - (num % 5))
        console.log(`Nota final (Arredondada): ${notaFinal}\nSituação: Aprovado`)
    } else{
        console.log(`Nota final: ${num}\nSituação: Aprovado`)
    }
}

situacaoFinal(29)
situacaoFinal(38)
situacaoFinal(45)