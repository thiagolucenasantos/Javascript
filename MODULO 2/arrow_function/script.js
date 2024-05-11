//FORMA MAIS NOVA DE CRIAR UMA FUNÇÃO

//FUNCÃO CRIADA NORMALMENTE
function somar(x, y){
  return (x + y);
}
console.log(somar(10, 5))

// CRIAÇÃO DE FUNÇÃO COM ARROW FUNCTION "() => {}"
const soma = (a, b) =>{
  return (a + b);
}
console.log(soma (20, 10))

//MESMA FUNÇÃO A CIMA PORÉM RESUMIDA
const soma2 =(c, d) => c + d; //se houver mais de uma linha de cógigo, temos que utilizar as {}
console.log(soma2(2, 5))

//SIMPLIFICANDO MAIS AINDA QUANDO A FUNÇÃO TEM SOMENTE UM PARÂMETRO
 const nome = sob => "Thiago" + sob; //não precisa utilizar (), aqui no caso no "sob"
 console.log(nome(" Santos"));
