function record (listaStr){
    let min, pior
    listaStr = listaStr.split(" ")
    for(let i = 0; i <= listaStr.length; i++){

    }
    min = Math.min(...listaStr)
    pior = listaStr.indexOf(min)
    console.log(pior)
}
listaStr = "10 20 30"
record(listaStr)