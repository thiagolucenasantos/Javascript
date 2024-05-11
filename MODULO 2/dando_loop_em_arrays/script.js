let cores = ["preto", 'branco', 'azul', 'vermelho'];

cores.push('amarelo')
// precisa colocar (condição inicial, até quando será executado, incrementar)
for(let n= 0; n < cores.length; n++){ //usamos o cores.lenght para o array executar de acordo com o tamanho do array sempre
    console.log(cores[n])
}

// for melhor executável do que o acima
for( let i in cores){ //a variável i é a chave que é executada de acordo com o array cores
    console.log(`Veja as ${cores}`)
}

//outra forma de executar o mesmo código
//a variável vai pegar diretamente de cores
for( let cor of cores){ //fazendo com 'of' ele se refere ao valor em cores
    console.log(`Outra forma de mostras ${cor}`)
}

