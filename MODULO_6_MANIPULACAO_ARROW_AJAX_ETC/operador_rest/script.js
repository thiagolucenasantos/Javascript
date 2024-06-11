//utilizando operador rest no parâmetro da função
// assim ele recee no parâmetro quantos números o usuário quiser, sem restrição
function adicionar(...numeros){
    console.log(numeros);
}

adicionar(1, 2, 3, 4, 5)

function addNomes(nomes, ...novosNomes){//utilizando o operador rest
    let nomesJuntos = [
        ...nomes, 
        ...novosNomes];//aqui utilizando o spread

    return nomesJuntos
}

let nomes = ["João", "Maria"]

let outros = addNomes(nomes, "Pedro", "jessica")

console.log(outros)