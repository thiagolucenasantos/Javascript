function loadPosts() {

    document.getElementById("posts").innerHTML = "Carregando posts..."
    //1 parâmetro do fetch a url que será utiliada
    //2 parâmentro, não obrigatório as configurações da requisição
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (resultado) {
            return resultado.json();
        })
        .then(function (json) {
            montarBlog(json)//vamos fazer a função para trabalhar o json da api
        })
        .catch(function (error) {
            console("verifique o problema!")
        })
}

function montarBlog(lista) {
    let html = "";

    //utilizando estrutura de repetição para organizar os posts
    for (let i in lista) {
        html += "<h3>" + lista[i].title + "</h3>";
        html += lista[i].body + "</br>"
        html += "<hr/>"
    }

    //após adicionar vamos mostrar na tela
    document.getElementById("posts").innerHTML = html;
}