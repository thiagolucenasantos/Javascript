//utilizando o onclick direto no html
function clicou(){

    //selecionando o elemento que iremos manipular
    const input = document.querySelector('input');
    const botao = document.querySelector(".botao");//selecionando o button pela classe
    console.log(input)

    //como pegamos atributos de um elemento, exemplo type, name, placeholder.
    console.log(input.getAttribute("name"))

    //função para saber se existe o atributo,retorna um boolean
    //hasAttribute serve para saber se tem o atributo
    //getAttribute serve para pegar o atributo
    if(input.hasAttribute("name")){
        console.log("Tem name sim!!");
    }else{
        console.log("Não tem name....")
    }

    //trocando o tipo do atributo, no nosso caso de password para text, e o botão o nome de mostrar e ocultar
    //se o type for text atribuimos o tipo password e o botão mostrar senha
    if(input.getAttribute("type") === "text"){
        input.setAttribute("type", "password");
        botao.innerHTML = "Mostrar senha";
    }else{
        //caso contrário atribuimos o tipo texto ao que foi digitado e para o botão o nome ocultar senha
        input.setAttribute("type", "text");
        botao.innerHTML = "Ocultar senha"
    }    

}

