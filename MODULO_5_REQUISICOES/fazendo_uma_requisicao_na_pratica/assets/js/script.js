//site de uma api falsa para testes: https://jsonplaceholder.typicode.com/posts

function clicou(){
    //função fetch, utilizada para fazer a requisições
    fetch("https://jsonplaceholder.typicode.com/posts")
        //pegando a resposta pura e transformando em um objeto
        .then((response) => {
            return response.json();
        })
        //pegando o objeto e mostrando após o retorno do objeto
        .then((data) => {
            alert(`Titulo: ${data[0].title}`)
        })
        //catch, serve para ser executado quando houver algum problema de callback em alguma requisição
        .catch(() => {
            alert("Deu problema da requisição!!")
        })
        //finally, dando certo ou errado a requisição ele irá executar
        .finally(() => {
            alert("Acabou tudo!!")
        })

}

//adicionando o nosso evento de clique ao botão
document.querySelector("#botao").addEventListener("click", clicou)
