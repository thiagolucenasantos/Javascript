function clicou(){
    const button = document.querySelector("button");

    //classList mostra a quantidade de classes que o atributo possue no console e seus detalhes
    console.log(button.classList)

    //adicionando uma classe nova para o botão em que estamos trabalhando
    button.classList.add("classeAdicionadaPelaFuncao")

    //removendo um classe
    button.classList.remove("botao")

    //toggle faz a troca de classe adicionando e removendo
    button.classList.toggle("botao1")

    //replace recebe 2 parâmetros para trocar de um para outro
    if(button.classList.contains("botaoTroca")){
        button.classList.replace("botaoTroca", "botaodestroca")
    }else{
        button.classList.replace("botaodestroca", "botaoTroca")
    }
}