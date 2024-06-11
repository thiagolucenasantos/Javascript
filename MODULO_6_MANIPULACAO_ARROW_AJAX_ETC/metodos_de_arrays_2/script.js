let lista = ["Ovo", "Farinha", "Corante", "Massa"];
let lista2 = ["Cachorro", "Gato", "Macaco", "Cobra"]

//removendo um item do array
//primeiro parâmetro posição a partir de qual indice começará a remoção
//segundo parâmetro quantos itens serão removidos a partir do primeiro parâmetro
lista.splice(1, 2)

let resultado = lista;

console.log(resultado)

//juntando dois arrays
let resultado2 = lista2.concat(lista)
console.log(resultado2)

//colocando o array em ordem alfabetica
lista2.sort()
//invertendo a ordem alfabética
lista2.reverse()

let resultado3 = lista2;
console.log(resultado3)