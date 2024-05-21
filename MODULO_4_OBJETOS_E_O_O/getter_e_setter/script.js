class Person {
    //atributo fixo, feito fora do construtor, por default todos serão do lar.
    profissao = "do lar"
    steps = 0;
    _age = 10; //o "_" antes do nome, indica que ele é um getter e setter

    //construtor da função, sempre executa quando se cria uma pessoa nova
    constructor(firstName, lastName) {
        this.firstName = firstName; // this referencia ao atributo referenciado no construtor
        this.lastName = lastName

    }
    
    //criando um get, ele retorna algo
    get age(){
        return this._age;// returnando a nossa variável _age
    }

    //criando um get com o nome completo do construtor
    get fullName(){
        return (`${this.firstName} ${this.lastName}`)
    }

    //set são para alterar o valor dos atributos, recebendo o novo valor no parâmentro
    set age(x){
        if(typeof x === "number"){
            this._age = x
        }
    }
}

//instanciando uma classe, para criar uma pessoa, um objeto.
let p1 = new Person("Thiago", "Santos");
let p2 = new Person("Ana", 42);

//alterando a idade utilizando o set
p1.age = 30;


//neste exemplo pegamos nossa função fullName e age que são gets
console.log(`${p1.fullName} tem ${p1.age} anos.`)

