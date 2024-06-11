//Funcões que arredondam os números
let round = Math.round(3.69);

//sempre arredonda para baixo
let floor = Math.floor(3.69)

//sempre arredonda para cima
let ceil = Math.ceil(3.22)

//número absoluto de determinado número
let abs = Math.abs(-23.4904)

//nos retorna o maior número passado no parâmetro
let max = Math.max(10,30,40,50,60,60)

//nos retorna o menor número passado no parâmetro
let min = Math.min(10,30,40,50,60,60)

//arredonda um número entre 0 e 1, no nosso exemplo vamos encorpar ele para 0 e 100
let random = Math.floor(Math.random() * 100);


console.log(`round - arredonda o número: ${round}`)
console.log(`floor - sempre arredonda para baixo: ${floor}`)
console.log(`ceil - sempre arredonda para cima: ${ceil}`)
console.log(`abs - número absoluto de determinado número ${abs}`)
console.log(`max - nos retorna o maior número passado no parâmetro ${max}`)
console.log(`min - nos retorna o menor número passado no parâmetro ${min}`)
console.log(`random - arredonda um número entre 0 e 1, no nosso exemplo vamos encorpar ele para 0 e 100: ${random}`)