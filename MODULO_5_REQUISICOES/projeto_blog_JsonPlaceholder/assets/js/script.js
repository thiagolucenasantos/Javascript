//site de uma api falsa para testes: https://jsonplaceholder.typicode.com/posts

async function readPosts(){
    let postArea = document.querySelector(".posts");
    postArea.innerHTML = "Carregando...";

    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = "";

        for(let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`;
            postArea.innerHTML += postHtml;
        }
    }else{
        postArea.innerHTML = "Nenhum post para exibir";
    }
}

async function addNewPost(title, body){
    await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 2
            })
        }
    );
    //limpando os campos novamente, após os dados serem encaminhados para api falsa
    document.querySelector("#titleField").value = "";
    document.querySelector("#bodyField").value = "";

    //recarregando os posts padrões novamente
    readPosts();
}

//fizemos o evento de click do botão, em que ao clicar ele irá pegar o que tem 
//no título e body
document.querySelector("#insertButton").addEventListener("click", () => {
    let title = document.querySelector("#titleField").value;//pegando valor digitado no campo com este id
    let body = document.querySelector("#bodyField").value;

    if(title && body){
        addNewPost(title,body);
    }else{
        alert("Preencha todos os campos!!")
    }
})

readPosts();