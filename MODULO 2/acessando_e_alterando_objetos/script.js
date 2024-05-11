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
    }
}

personagem.nome = "João"; // alterando propriedades
console.log(personagem.nome)

personagem.caracteristicas.forca += 10; //adicionando mais 10 a força
console.log(personagem.caracteristicas.forca)

// selecionando um array que está dentro de um objeto que possui um objeto

let personagem2 = {
    nome:'Thiago',
    idade:'50',
    carros:[
        {modelo: 'Fusca', cor: 'Preto'},
        {modelo: 'Brasília', cor: 'azul'}
    ]
}
console.log(personagem2.carros[1].modelo);