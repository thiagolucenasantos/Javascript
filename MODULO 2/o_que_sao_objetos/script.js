//para criar objetos utilizamos {}
// os objetos podem receber propriedades

let personagem = { //indicando objeto
    nome:  'Thiago', //propriedades
    idade: 37,
    pais: 'Brasil',
    caracteristicas: { //objeto dentro de um objeto
        forca: 5,
        magia: 20,
        stamina: 10
    },
    olhos: ['preto', 'azul'] //adicionando um array dentro de um objeto
}

console.log(personagem.pais) //adicionando propriedade específica

//buscando uma propriedade de um objeto dentro de outro objeto
console.log(personagem.caracteristicas.stamina)

//buscando uma propriedade de um array dentro de um objeto
console.log(personagem.olhos[1])