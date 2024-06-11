let numero = "5";

//padEnd
//primeiro parâmetro: quantos caracteres a string tem que ter obrigatoriamente.
//segundo parâmetro: o que irá preencher caso seja necessário a string
//preenchimento todo a direita após nosso número já atribuido
console.log(numero.padEnd(9, "*"))

//preenchimento a esquerda antes do número atribuído a variável
console.log(numero.padStart(6, "-"))

//exemplo

let cartao = "123123123123";

let ultimosDigitos = cartao.slice(-3);

let cartaoMascarado = ultimosDigitos.padStart(12, "*");

console.log("Este é o final do seu cartão: " + cartaoMascarado)