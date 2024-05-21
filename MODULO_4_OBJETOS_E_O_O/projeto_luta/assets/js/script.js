let log = new Log(document.querySelector(".log"));
let char = new Knight("Thiago");
let monster = new BigMonster();

//executando o cenário com o que precisa chamar para a tela do navegador
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'), //fará com que o name do html seja substituido pelo nome do char
    document.querySelector('#monster'),//fará com que o name do html seja substituido pelo nome do monster
    log
);
//inicializando a função para o jogo
stage.start();



