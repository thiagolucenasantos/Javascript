class Person{
    //atributo fixo, feito fora do construtor, por default todos serão do lar.
    profissao = "do lar"
    steps = 0;
    entrada = 1;
    
    //construtor da função, sempre executa quando se cria uma pessoa nova
    constructor(name, age){
        this.name = name; // this referencia ao atributo referenciado no construtor
        this.age = age;
    }
    //Criando a action de dar passos e incrementando após o uso
    takeAStep(){
        this.steps++;
    }

    permitirEntrada(permicao){
        if(typeof permicao === "number"){
            this.entrada = permicao;
            console.log("Permitido")
        }else{
            console.log("Não Parmitido")
        }
    }
}

//instanciando uma classe, para criar uma pessoa, um objeto.
let p1 = new Person("Thiago", 37);
let p2 = new Person("Ana", 42);


p1.takeAStep();
p1.takeAStep();

p2.permitirEntrada(4); // caso seja numero permiti o acesso, caso não ele não permite

console.log(`${p1.name} deu ${p1.steps} passos`)

