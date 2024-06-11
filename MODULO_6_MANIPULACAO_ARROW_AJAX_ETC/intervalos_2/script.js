let timer
//função setTimeout que se inicia após o determinado tempo e depois para, roda somente uma única vez  
function rodar() {
  timer =  setTimeout(function () {
        document.querySelector(".demo").innerHTML = "Rodou!!!"
    }, 6000)
}

//parar o Timeout no meio da execução
function parar(){
    clearTimeout(timer)
}