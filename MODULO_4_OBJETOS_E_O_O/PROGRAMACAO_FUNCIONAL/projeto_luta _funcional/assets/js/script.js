const knight = createKnight("Thiago");
const monster = createLittleMonster();

//inicializando a tela do jogo
stage.start(
    knight, 
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);
