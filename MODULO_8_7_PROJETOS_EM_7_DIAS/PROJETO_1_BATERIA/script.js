//vamos aplicar o evento de apertar a tecla em toda a tela, então vamos aplicar no body
//o body irá escutar o eento de keyup, que é o de apertar e soltar a tecla,
//após isso irá verificar nossa função
document.body.addEventListener("keyup", (event) => {
    //aqui após determinada tecla ser apertada ela irá ser transformada em minúscula
    //assim ela irá bater com nossa dataKey, criada no html
    playSound(event.code.toLowerCase())
})

//adicionamos um evento de escuta neste botão de clique
document.querySelector(".composer button").addEventListener("click", () => {
    //pegamos no input de texto o que a pessoa digitar
    let song = document.querySelector("#input").value;

    //fazendo condicional para verificar e capturar o que foi digitado
    if(song !== ""){
        //aqui estamos gerando praticamente um array com cada letra digitada pelo usuário separada
        let songArray = song.split("");
        playComposition(songArray)
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    //criamos a variável para captura de determinada tecla apertada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement) {
        //antes do play vamos adicionar uma reiniciação do audio para que 
        //seja tocado após cada aperto na tecla
       // audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.play();        
    }
    if (keyElement) {
        //adicionando a classe que possue active do css, ele irá executar o efeito que a classe key.active tem que fazer
        keyElement.classList.add("active")

        //agora após aplicar o efeito do css vamos remover dando a sensação que o botão
        //foi apertado e desapertado
        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 300)
    }
}

function playComposition(songArray){

    let wait = 0;
    for(let songItem of songArray){
        //vamos incluir um setTimeout para executar o loop com um intervalo para 
        //tocar a música
        setTimeout(()=>{
            playSound(`key${songItem}`)
        },wait)
        //adicionamos o tempo maior para ir incrementando dando a sensação de tocar corretamente
        wait += 250;
    }
}