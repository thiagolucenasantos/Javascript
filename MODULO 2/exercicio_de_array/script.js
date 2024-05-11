// no array abaixo, qual  o número que pega a Ferrari??
let carros = ['BMW', 'Ferrari', 'Mercedes']
let x = 1;
console.log('1. ' + carros[x])

//Troque a Ferrari por Audi:

//solução do professor
carros[1] = 'Audi'

//minha solução
let troca = 'Audi';
carros[1] = troca;
console.log(`2. Lista com Audi: ${carros}`);
console.log(carros)

//Adicione Volvo a lista
carros.push('Volvo')
console.log(`Lista com Volvo ${carros}`)

console.log(`Existem ${carros.length} itens no array`);
