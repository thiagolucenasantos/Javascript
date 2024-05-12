//utilizando o onclick direto no html
function clicou(){
    const teste = document.querySelector("#teste2");
    const ul = teste.querySelector("ul")

    //adicionando um elemento a lista
    ul.innerHTML = ul.innerHTML + "<li> Testando 3 </li>";

    //alterando um elemento da lista pegando pela sua posição
    ul.children[0].innerHTML = "<strong> Testando alterado </strong>"

    //OUTRAS FORMAS DE ADICIONAR UM ELEMENTO

    //append utilizamos quando queremos adicionar um novo elemento, de maneira que o html
    //não seja todo retirado da memória e recolcado novamente como o caso do .innerHTML
    //ele apenas pega o que queremos e adiciona sem alterar em nada o que já existe.
    //porém ele só funciona para textos
    ul.children[1].append("Adicionando novo elemento")

    /*adicionando um novo elemento utilizando o .append*/

    //primeiro precisamos criar o elemento em memória
    let newLi = document.createElement("li")
    newLi.innerText = "Item adicionado"
    //adicionamos o elemento a lista, no final dela
    ul.appendChild(newLi);

    //adiciona um elemento no inicio da lista
    ul.prepend(newLi);

    //ADICIONANDO UMA NOVA LISTA DENTRO DO UL EXISTENTE
    let newUl = document.createElement("ul")
    
    //fazendo um for para adicionar 5 elementos na nova lista
    for(let i = 0; i < 5; i++){
        let newLista = document.createElement("li");
        newLista.innerHTML = "Item add " + (i + 1);
        newUl.append(newLista);
    }
    ul.after(newUl);// after adiciona depois de todos os elementos, before adiciona antes.


}

