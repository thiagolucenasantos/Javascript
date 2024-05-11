let fruits = ['banana', 'maça', 'uva', 'melancia'];
let fruits1 = ['banana', 'maça', 'uva', 'melancia'];

//ordenar array por ordem alfabética, reordena a posição dos elementos também
fruits.sort();

console.log(fruits);
//invertendo os itens do array começando de trás para frente
fruits1.reverse();

console.log(fruits1);

//array de objetos
let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Ferrari', year: 2018},
    {brand: 'Bmw', year: 2020}
]
cars.sort((a, b) =>{
    return a.year - b.year; // função simplificada para colocar a ordem dos carros pela ordem dos anos
})
console.log(cars)