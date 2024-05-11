let fruits = [ 'banana', 'maça', 'melancia', 'uva'];

// a função fruits gera um novo array, então temos que salvar ela em uma nova variável

let bigFruits = fruits.filter((item) => {
    return item.length > 4;
})
console.log(bigFruits);

//---------------------------

let fruits1 = [ 'banana', 'maça', 'melancia', 'uva'];

//every só retorna true se todos respeitarem a condição imposta
let verifica = fruits.every((value) => {
    return value.length > 3
})

if(verifica){
    console.log("Todos possuem mais que 3");
}else{
    console.log("Nem todos possuem mais que 3");
}

//--------------------------
let fruits2 = [ 'banana', 'maça', 'melancia', 'uva'];

//some retorna true se algum item obedecer o que foi imposto na função
let verifica1 = fruits2.some((value) => {
    return value.length > 3
})

if(verifica1){
    console.log("Algum item é maior que 3");
}else{
    console.log("Nenhum item é maior que 3");
}

//-----------------------------

//funcão includes faz uma varredura direta pra mim do array e verifica se existe o que estamos procurando
let fruits3 = [ 'banana', 'maça', 'melancia', 'uva'];

if(fruits.includes('melancia')){
    console.log('Tem melancia sim')
}else{
    console.log('Não tem melancia')
}

