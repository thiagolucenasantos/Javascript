let list = [45, 4, 9, 16, 25];
let list2 = []
let list3 =[]
let list4 = []
let list5 = []

//map(): percorre o array escolhido, faz a multiplicação por 2 conforme o retorno
// e começa a adicionar no array novo
list2 = list.map(function(item){
    return item * 2;
})

//filter(): filtra o array de acordo  com a condição, ele retorna true ou false
list3 = list.filter(function(item){
    if(item < 20){
        return true;
    }else{
        return false;
    }
})

/*
every(): se todos os itens do array estiverem de acordo com a condição
ele retorna true, caso contrário ele retorna false
a função some(), faz o mesmo que a every, porém caso algum esteja dentro da
da condicional ela já retorna true
*/

list4 = list.every(function(item){
  return (item > 20) ? true : false;
})

//find(): retorna o que procura de acordo com a condicional
//findIndex(): faz a mesma coisa, porém ele retona a posição do item quando encontrar
list5 = list.find(function(item){
    return (item == 45) ? true : false;
})

let resultado = list2;
let resultado1 = list3
let resultado2 = list4
let resultado3 = list5

console.log(`Map: ${resultado}`)
console.log(`Filter: ${resultado1}`)
console.log(`Every: ${resultado2}`)
console.log(`Find: ${resultado3}`)