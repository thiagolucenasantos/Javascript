class Person{
    //atributo fixo, feito fora do construtor, por default todos serão do lar.
    profissao = "do lar"
    
    //construtor da função, sempre executa quando se cria uma pessoa nova
    constructor(name, age){
        this.name = name; // this referencia ao atributo referenciado no construtor
        this.age = age;
    }
}

//instanciando uma classe, para criar uma pessoa, um objeto.
let p1 = new Person("Thiago", 37);
let p2 = new Person("Ana", 42);

//modificando a profissão da pessoa p1
p1.profissao = "policial";


console.log(`${p1.name} tem ${p1.age} e sua profissão é ${p1.profissao}.`)
console.log(`${p2.name} tem ${p2.age} e sua profissão é ${p2.profissao}`)