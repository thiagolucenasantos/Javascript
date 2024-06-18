function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("Pegando temperatura...");

        setTimeout(function(){
            resolve("40 na sombra");
        }, 2000)
    })
}

//Usando a Promise
let temp = pegarTemperatura();

//aqui fazemos um callback com o "then", para pegar o resutado da promise
temp.then(function(resultado){
    console.log(`A temperatura é: ${resultado}`)
})
//caso tenha dado algum erro de reject na promise
temp.catch(function(error){
    console.log("Deu erro de consulta")
})