function maiorDeIdade(idade){
    if(idade > 18){
        return ("Pode entrar")
    }else{
        return("Não pode entrar")
    }
}

let idade = 30
let verificação = maiorDeIdade(idade);
console.log(verificação)