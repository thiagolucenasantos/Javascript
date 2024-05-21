//PERSONAGENS - KNIGHT E MAGE
//MONSTROS - LITTLEMONSTER E BIGMONSTER

//nosso personagem default
class Character{

    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;

    //todo personagem criado precisa ter um nome
    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }
    set life(newLife){
        //condição se a vida for menor que 0 coloque 0 no contador de vida, se não adicione o valor atual.
        this._life = newLife < 0 ? 0 : newLife;
    }
}

//criação do guerreiro com suas características próprias
class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxlife = this.life;
    }
}

//criação do mago agora
class Sorcerer extends Character{
    constructor(nome){
        super(nome);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxlife = this.life;
    }
}

//criação do little Monster
class LittleMonster extends Character{
    //não iremos colocar manualmente o nome dele, será fixo pela classe super que no caso é Character
    constructor(){
        super("Little Monster");
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxlife = this.life;
    }
}

class BigMonster extends Character{
    constructor(){
        super("Big Monster");
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxlife = this.life;
    }
}

//criação do cenário para luta e as informações obrigatórias no constructor

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }
    //função de start do jogo
    start(){
        this.update();

        //fazendo o ataque do fighter1 no fighter2
        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2))

         //fazendo o ataque do fighter2 no fighter1
         this.fighter2El.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1))
    }
    //atualização da tela da luta
    update(){
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        //calculo da vida do personagem
        let f1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
        //modificando a barrinha após o cálculo de porcentagem
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`

        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
         //calculo da vida do personagem
         let f2Pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
         //modificando a barrinha após o cálculo de porcentagem
         this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked){
        //console.log(`${attacking.name} está atacando ${attacked.name}`)

        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage("Já temos um vencedor!!")
            return
        }

        //ataque e defesas aleatórios para o jogo
        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);
        
        //usando a força de ataque atual do personagem e multiplicando pelo número random que tiver do attackFactor
        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        //condição para dimninuir o HP quando tomar dano e mostrar caso tenha defendido
        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
        }else{
            this.log.addMessage(`${attacked.name} conseguiu defender!!`)
        }

        this.update();
    }
    
}

class Log{
    list = []

    constructor(listEl){
        this.listEl = listEl;
    }

    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        //limpando a lista
        this.listEl.innerHTML = " ";

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}