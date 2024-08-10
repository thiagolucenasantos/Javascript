/* document.querySelector(".neutralArea").addEventListener("click", () => {
    /*Diferenças de target e current terget
    Target - ao clicar específica exatamente o elemento clicado, independente de ter evento ou não.
    Current Target - independente de ter elementos dentro do principal, onde possuimos um evento, ele sempre irá 
    respeitar o elemento principal ao qual atribuimos algo
    
})
    */

//EVENTS

document.querySelectorAll(".item").forEach(item =>{
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd)
})

document.querySelectorAll(".area").forEach(area =>{
    //quando preparamos uma área para receber um elemento, precisamos utilizar no mínimo as princípais funções
    //dragover, dragleave e drop
    area.addEventListener("dragover", dragOver);
    area.addEventListener("dragleave", dragLeave);
    area.addEventListener("drop", drop);
})

//FUNCTIONS ITEM
function dragStart(e){
    e.currentTarget.classList.add("dragging")
}

function dragEnd(e){
e.currentTarget.classList.remove("dragging")
}


//FUNCTIONS AREA
function dragOver(e){
    //precisamos usar o preventDefault na função para que o drop possa receber o elemento após executar sua função
e.preventDefault();
}

function dragLeave(){
console.log("saiu de uma área dropável")
}

function drop(){
console.log("Lierou")
}