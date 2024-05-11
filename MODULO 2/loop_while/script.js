// while = enquanto
// estrutura do while
// while(condicional){ código a ser executado}

let numero = 0;
while(numero <= 10){
    console.log(`O número da vez é: ${numero}`)
    numero++; //MUITO CUIDADO!! precisamos incrementar a variável, porque se não ela ficará executando infinitamente
}