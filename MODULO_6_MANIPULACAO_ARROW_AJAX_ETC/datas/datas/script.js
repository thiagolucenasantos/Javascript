let d = new Date();

//mostra a data completa com diversos dados
console.log(d)
//mostra a data resumida
console.log(d.toDateString())
//mostra a data sem o fuso horário e mostra o horário oficialde Grewitch
console.log(d.toUTCString())

//passando os parâmetros na função Date
//Ano, mes, data, hora, minutos, segundos e milissegundos
let data = new Date(2024, 5, 1, 17, 34, 4, 3)
//outra forma de gerar datas e horas
let data2 = new Date("2024-6-01 14:48:19")


console.log(data)
console.log(data2)

//pegando somente o ano
let ano = data.getFullYear();
//somente o mês
let mes = data.getMonth();
//somente o dia
let dia = data.getDate();
//somente a hora
let horas = data.getHours();
//somente minutos
let minutos = data.getMinutes();
//somente segundos
let segundos = data.getSeconds();
//somente o timestamp entre dia 01/01/1970 até a data atual
let timestamp = data.getTime()

console.log(`Pegando somente o ano: ${ano}`)
console.log(`Pegando somente o mes: ${mes}`)
console.log(`Pegando somente o dia: ${dia}`)
console.log(`Pegando somente a horas: ${horas}`)
console.log(`Pegando somente os minutos: ${minutos}`)
console.log(`Pegando somente os segundos: ${segundos}`)
console.log(`Pegando somente o timeStamp: ${timestamp}`)

/* MANIPULANDO AS DATAS */
//trocando mes - setMonth(), todas as informações podemos utilizar o set + ano, dia, hora

let manipilandoDatas = new Date("2024-01-25");

//trocando ano
manipilandoDatas.setFullYear("2022")

//aumentando a data
manipilandoDatas.setDate(manipilandoDatas.getDate() + 4)

let mudandoAno = manipilandoDatas

console.log(mudandoAno)

