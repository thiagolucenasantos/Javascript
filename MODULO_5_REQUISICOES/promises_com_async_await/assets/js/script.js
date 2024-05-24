//site de uma api falsa para testes: https://jsonplaceholder.typicode.com/posts

//utilizando async e await temos uma forma mais legível e também no momento da resposta do json,
//ela irá obedecer a ordem de execução, não executando nada antes do que está pedindo no await
async function clicou(){
    //função fetch, utilizada para fazer a requisições
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await response.json()//pegando a resposta pura e transformando em um objeto

    alert(`Título do primeiro post: ${json[0].title}`)
    alert(`Sendo executado após os awaits`)

}

//função de requisição POST
async function inserir(){
let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",     
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Título de teste",
                body: "Corpo de teste",
                userId: 2
            })
        })
        //pegando a resposta do Post e convertendo ele em objeto
   let json = await response.json();
   console.log(json)
}

//adicionando o nosso evento de clique ao botão
document.querySelector("#botao").addEventListener("click", clicou)
document.querySelector("#inserir").addEventListener("click", inserir)
