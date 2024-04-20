function juroSimples(cap, taxa, tempo){
    let juros, montante
    juros = (cap * taxa * tempo)/100
    montante = cap + juros
    return montante
}

function jurosCompostos(cap, taxa, tempo){
    let montante
    montante = cap * (1 + taxa) ** tempo 
    return montante
}

console.log(jurosCompostos (2000, 0.03, 4))