//função normal
function somar1(a, b){
    return a + b
}

//outro modelo função normal
let somar2 = function(a, b){
    return a - b
}

//utilizando arrow function agora
let somar3 = (a, b) => {
    return a * b
}

//utilizando arrow function com redução 
let somar4 = (a, b) => a + b

//arrow function somente com um parâmetro não necessita de ()
let nomeTamanho = nome => nome.length;


console.log(somar1(10,3))
console.log(somar2(10, 5))
console.log(somar3(10, 2))
console.log(somar4(20,5))
console.log(nomeTamanho("Thiago"))