let pessoa = {
    nome: "Carlos",
    sobrenome: "Alberto",
    idade: 49
}
//com o keys conseguimos olhar todas as chaves os atributos principais do objeto
console.log(Object.keys(pessoa))
//values retorna todos os valores que o objeto possue
console.log(Object.values(pessoa))
//entries ele gera um array novo dentro do array com cada item específico
console.log(Object.entries(pessoa))