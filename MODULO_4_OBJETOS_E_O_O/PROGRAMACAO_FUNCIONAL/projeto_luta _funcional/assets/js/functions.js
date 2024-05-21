//criação de personagem default
const defaultCharacter = {
    name: " ",
    life: 1,
    maxlife: 1,
    attack: 0,
    defense: 0
}

//criação do personagem recebendo herança
const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxlife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return{
        ...defaultCharacter,
        name,
        life: 80,
        maxlife: 80,
        attack: 14,
        defense: 4
    }
}

const createLittleMonster = () => {
    return{
        ...defaultCharacter,
        name: "LittleMonster",
        life: 40,
        maxlife: 40,
        attack: 5,
        defense: 5
    }
}

const createBigMonster = () => {
    return{
        ...defaultCharacter,
        name: "BigMonster",
        life: 80,
        maxlife: 80,
        attack: 15,
        defense: 10
    }
}

//criação do objeto que controlará o cenário
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1EL: null,
    fighter2EL: null,

    start(fighter1, fighter2, fighter1EL, fighter2EL){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;

        //adicionando a ação no botão de atacar
        this.fighter1EL.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2EL.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));
    
        this.update();
    },
    update(){
        //fighter 1
        this.fighter1EL.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        //cálculo para vida dos personagens
        let f1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
        //adicionando o cálculo a nossa barra para fazer o efeito de diminuição da vida
        this.fighter1EL.querySelector(".bar").style.width =`${f1Pct}%`

        //fighter 2
        this.fighter2EL.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
          //cálculo para vida dos personagens
          let f2Pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
          //adicionando o cálculo a nossa barra para fazer o efeito de diminuição da vida
          this.fighter2EL.querySelector(".bar").style.width =`${f2Pct}%`
    },
    doAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0){
            log.addMessage("A luta acabou, alguém está morto!!")
            return
        }

        //fazendo a parte de ataques e defesas aleatórios de um contra o outro
        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        //atribuindo o cálculo acima para o atacante e o defensor
        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        //fazendo condição de ataque e defesa
        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;//verificação caso a vida seja 0 ou menor ficara 0, caso contrário ficará de acordo com sua vida normal
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        }else{
            log.addMessage(`${attacked.name} conseguiu defender!!`)
        }

        //atualizando o cenário após o ataque
        this.update();
    }
}

//vamos fazer o log da tela, onde irá demonstrar as ações dos lutadores

const log ={
    list: [],
    addMessage(msg){
        this.list.push(msg);
        this.render();
    },
    render(){
        const logEL = document.querySelector(".log");
        logEL.innerHTML = " ";

        for(let i in this.list){
            logEL.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }

}