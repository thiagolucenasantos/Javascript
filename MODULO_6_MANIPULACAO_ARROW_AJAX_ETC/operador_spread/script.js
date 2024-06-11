let numeros = [1,2,3,4];
//utilização de spread operator para complementar meu novo array com as 
//informações do array numeros já existentes
let maisNumeros = [...numeros, 5, 6, 7, 8]

console.log(maisNumeros)

//utilizando em ojetos
let dados = {
    nome: "Carlos",
    sobreNome: "Alberto"
}

let dadosComplementares = {
    ...dados,
    idade: 27,
    cidade: "São Paulo"
}
console.log(dadosComplementares)

//exemplo em uma função
function adicionarInfo(info){
    let novasInfo = {
        ...info,
        estado: "SP"
    }
    return novasInfo
}

console.log(adicionarInfo({nome: "Jessica", sobreNome: "Gonçalves"}))