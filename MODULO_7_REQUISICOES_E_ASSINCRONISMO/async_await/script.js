async function loadPosts() {

    document.getElementById("posts").innerHTML = "Carregando posts..."

    //temos que incluir o await quando utilizamos o async
    //nessas 3 linhas de código fazemos o mesmo que nas linhas do fetch
    //essa é a forma ideal de utilização e limpeza do código
    let req = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await req.json()
    montarBlog(json)


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