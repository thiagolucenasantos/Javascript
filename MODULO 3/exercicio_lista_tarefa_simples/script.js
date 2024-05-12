//ELEMENTOS
const lista = document.querySelector("ul");
const input = document.querySelector("input")

//FUNÇÕES
function adicionarLista(e){
   if(e.key === "Enter"){
    //criação do novo elemento
    const newLi = document.createElement("li");
    newLi.innerHTML = input.value; //colocando o texto dentro dele

    //adicionando o elemento a lista
    lista.appendChild(newLi);

    //deixando a caixinha do input vazia após a adição do elemento
    input.value = "";
    
   }
}

//EVENTOS
input.addEventListener("keyup", adicionarLista)







