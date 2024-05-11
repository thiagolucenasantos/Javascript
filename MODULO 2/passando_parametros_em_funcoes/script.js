//DENTRO DOS PARêNTESES A FUNÇÃO PODE RECEBER PARÂMETROS DE FORA DELA PARA EXEXUTAR 
//ALGUM RESULTADO DESEJADO,NO CASO AQUI ELA IRÁ RECEBER OS PARÂMENTROS DE somar()
function somar(n1, n2){
    let resultado = n1 +n2;
    console.log("O resultado é: " + resultado)
}
//RECEBENDO OS PARÂMETROS
somar(10, 15)

function nomeCompleto(nome, sobrenome){
    console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("Thiago", "Santos")
//rodando a função novamente
nomeCompleto("Ana", "Catarina")