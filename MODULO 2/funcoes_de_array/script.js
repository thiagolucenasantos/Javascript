let fruits = ['Maça', 'Banana', 'Kiwi']

//adiciona o item ao final do array
fruits.push('Laranja')
fruits.push('Manga')

//alterando o valor de uma posição n array
fruits[1] = "Pêra";

//exclui o primeiro item do array
fruits.shift();

//exclui o último item do array
fruits.pop();

//join, adiciona um elemento string ao array
console.log(fruits.join('-> '))

console.log(fruits);
console.log(fruits.length);

let cores = ["azul", 'amarelo', 'cinza', 'roxo']

//alterando o último elemento do array com a pesquisa automática sem precisar saber quantos elementos tem nele
cores[cores.length - 1] = "Caju"

console.log(cores);
