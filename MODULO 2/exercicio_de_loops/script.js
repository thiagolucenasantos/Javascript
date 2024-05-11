//Exercicio 1

//faça um loop que mostre todas as frutas
let fruits = ['Maça', 'Uva', 'Banana'];
for( n=0;  n < fruits.length; n++){
    console.log(fruits[n])
}
//outra forma de se fazer
for(x in fruits){
    console.log(fruits[x])
}

//Exercicio 2

//conte de 1 até 100 através de um while
let numero = 1;
while(numero <= 100){
    console.log(numero); // se eu mandar mostrar na tela ele vai até o 100, mas caso mostre depois do incremento ele irá até o 99
    numero++;
}