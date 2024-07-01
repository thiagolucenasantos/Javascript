//selecionamos o elemento do ponteiro digital
let digitalElement = document.querySelector(".digital");
//selecionando os segundos, minutos e horas
let sElement = document.querySelector(".p_s")
let mElement = document.querySelector(".p_m")
let hElement = document.querySelector(".p_h")

//função que será executada no setInterval
function updateClock(){
    //vamos pegar a função Date que tem dia mes ano e a hora completa
    let now = new Date();
    //vamos pegar separado agora a hora, minutos e segundos
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //adicionando a hora no meu template do html
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;
    //adicionando uma propriedade css direto na variável pelo javascript
    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

//função para consertar quando o tempo não tem dois números para aparecer o 0 na frente
function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

//vamos utilizar o setInterval para atualizar o relógio a cada segundo
setInterval(updateClock, 1000);
//vamos rodar a própria função para não ter o delay do setInterval inicial
updateClock();