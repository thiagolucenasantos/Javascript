//variável declarada fora das funções para que pudesse ser reaproveitadas
let timer;

function comecar(){
    //primeiro parâmetro da setInterval(função a ser executada, tempo para executar em milissegundos)
    timer = setInterval(showTime, 1000)
}

function parar(){
    clearInterval(timer)

}

function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h + ":" + m + ":" + s;

    //colocando nossa função dentro da nossa div de nome demo do html
    document.querySelector(".demo").innerHTML = txt;
    }
