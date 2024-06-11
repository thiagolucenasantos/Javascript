let lista = ["Ovo", "Farinha", "Corante", "Massa"];
let lista2 = ["Cachorro", "Gato", "Cavalo", "Cobra"]

//toString(): transforma o array em String, com todos os itens separados por vírgula
let resultado = lista.toString();

//join(): transforma o array em string separado pelo simbolo que vocÊ definir no join
let resultado2 = lista.join("--")

//indexOf(): procrura o parâmetro passado e mostra sua posição
let resultado3 = lista.indexOf("Massa");

//pop(): remove o último item do array
lista2.pop();
let resultado4 = lista2;

//shift(): remove o primero item do array
lista2.shift();
let resultado5 = lista2;

//push(): adiciona um item ao array
lista2.push("Tigre")
let resultado6 = lista2;

//outra forma de adicionar um item no array, porém o melhor é utilizar o push
lista2[ lista2.length] = "Morcego"

//alterando um item da lista
lista2[0] = "Camelo"

console.log(`toString: ${resultado}`)
console.log(`join: ${resultado2}`)
console.log(`indexOf: A posição da Massa é ${resultado3}`)
console.log(`pop: ${resultado6}`)
console.log(`shift: ${resultado6}`)
console.log(`push: ${resultado6}`)
