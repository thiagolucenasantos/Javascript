function apertou(){
    console.log("Apertou!")
}

function segurou(){
    console.log("Segurou!")
}

function soltou(){
    console.log("Soltou!")
}

//adicionando o evento agora direto com javascript, vamos adicionar no documento todo
//                   (nome do evento, nome da função que será acionada)

//document.addEventListener("keyup", soltou);



const input = document.querySelector("#inputJavascript")
input.addEventListener("keyup", soltouJavascript);

//Agora além de dispararmos o evento do clique saberemos qual tecla foi apertada
function soltouJavascript(e){
//code: é mais completo ele mostra por exemplo qual shift do teclado foi apertado se o da direita ou da esquerda
//key: é mais simples não especifica qual lado foi apertado dependendo da tecla
console.log(e.key);

//identifica se o usuário está com a tecla shift apertada ou não, retorna um boolean
console.log("Qual tecla apertada: " + e.code)
console.log("Shift apertada? " + e.shiftKey )//verifica se o Shift está apertado
console.log("Ctrl apertada? " + e.ctrlKey )//verifica se o CTRL está apertado
console.log("Alt apertada? " + e.altKey )//verifica se o ALT está apertado
console.log("--")
}

